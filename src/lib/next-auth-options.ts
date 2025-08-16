import { envs } from '@/schemas/envs-schema';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import InstagramProvider from "next-auth/providers/instagram";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from '@/db/prisma';
import * as bcryptjs from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30
  },
  providers: [
    InstagramProvider({
      clientId: envs.INSTAGRAM_CLIENT_ID,
      clientSecret: envs.INSTAGRAM_CLIENT_SECRTET,
    }),
    GoogleProvider({
      clientId: envs.GOOGLE_CLIENT_ID,
      clientSecret: envs.GOOGLE_CLIENT_SECRTET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        authMail: { label: "auth-mail", type: "email" },
        authPass: { label: "auth-pass", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { authMail, authPass } = credentials;

        const searchProfile = await db.profile.findUnique({
          where: {
            profile_auth_mail: authMail,
          }
        })

        if (!searchProfile || !searchProfile.profile_auth_pass) return null

        const { profile_auth_mail, profile_auth_username, profile_avatar_url, profile_birth_date, profile_created_at, profile_id, profile_provider, profile_updated_at } = searchProfile;

        const comparePass = await bcryptjs.compare(authPass, searchProfile.profile_auth_pass)
        if (!comparePass) return null

        return {
          profile_id,
          profile_auth_username,
          profile_auth_mail,
          profile_avatar_url,
          profile_birth_date: profile_birth_date.toISOString(),
          profile_created_at: profile_created_at.toISOString(),
          profile_updated_at: profile_updated_at.toISOString(),
          profile_provider: profile_provider,
          id: profile_id,
          email: profile_auth_mail,
          name: profile_auth_username,
          image: profile_avatar_url
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.sub = user.profile_id
      return token
    },
    async session({ session, token }) {
      session.user = {
        profile_id: token.profile_id as string,
        profile_auth_username: token.profile_auth_username as string,
        profile_auth_mail: token.profile_auth_mail as string,
        profile_avatar_url: token.profile_avatar_url as string | null,
        profile_birth_date: token.profile_birth_date as string,
        profile_created_at: token.profile_created_at as string,
        profile_updated_at: token.profile_updated_at as string,
        profile_provider: token.profile_provider as string
      };
      return session;
    },
  },
  pages: {
    signIn: "/sign-in"
  }
}