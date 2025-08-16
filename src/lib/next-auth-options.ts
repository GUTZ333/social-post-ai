import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        authMail: { label: "auth-mail", type: "email" },
        authPass: { label: "auth-pass", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.authMail || !credentials?.authPass) {
          return null;
        }
        return credentials as any;
      }
    })
  ],
}