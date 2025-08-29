import { db } from "@/db/prisma";
import { envs } from "@/schemas/envs-schema";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { resend } from "./resend";
import { twoFactor } from "better-auth/plugins";
import checkMailTemplate from "@/templates/check-mail-template";
import ChangePasswordEmail from "@/templates/change-password-template";

const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "mysql",
  }),
  appName: "social-post-ai",
  emailVerification: {
    async sendVerificationEmail({ url, user: { name, email } }) {
      const finalUrl = `${url}&redirectTo=/dashboard`;
      await resend.emails.send({
        from: envs.RESEND_FROM,
        to: email,
        subject: "Verify E-mail",
        react: checkMailTemplate({ url: finalUrl, username: name }),
      })
    },
  },
  verification: {
    fields: {
      value: "verification_value",
      identifier: "verification_identifier",
      expiresAt: "verification_expires_at",
      createdAt: "verification_created_at",
      updatedAt: "verification_updated_at"
    }
  },
  advanced: {
    database: {
      generateId: false
    }
  },
  account: {
    fields: {
      providerId: "provider_id",
      userId: "profile_id",
      accountId: "account_id",
      idToken: "id_token",
      accessToken: "account_access_token",
      refreshToken: "account_refresh_token",
      accessTokenExpiresAt: "account_expires_at",
      scope: "account_scope",
      createdAt: "account_created_at",
      updatedAt: "account_updated_at"
    }
  },
  session: {
    fields: {
      userAgent: "profile_agent",
      userId: "profile_id",
      token: "session_token",
      ipAddress: "session_ipAddress",
      createdAt: "session_created_at",
      updatedAt: "session_updated_at",
      expiresAt: "session_expires_at",
    }
  },
  user: {
    modelName: "profiles",
    fields: {
      email: "profile_auth_mail",
      name: "profile_auth_username",
      createdAt: "profile_created_at",
      updatedAt: "profile_updated_at",
      image: "profile_avatar_url",
      emailVerified: "profile_auth_mail_verified"
    },
    additionalFields: {
      profile_auth_birth_date: {
        type: "date",
        input: true,
        required: true
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true,
    async sendResetPassword({ url, user: { email, name } }) {
      const finalUrl = `${url}&redirectTo=/change-password`
      await resend.emails.send({
        from: envs.RESEND_FROM,
        to: email,
        subject: "Change Password",
        react: ChangePasswordEmail({ resetUrl: finalUrl, username: name })
      })
    },
  },
  plugins: [
    nextCookies(),
    twoFactor()
  ],
  socialProviders: {
    google: {
      clientId: envs.GOOGLE_CLIENT_ID,
      clientSecret: envs.GOOGLE_CLIENT_SECRET,
      redirectURI: `${envs.NEXT_URL}/api/auth/callback/google`
    },
  }
})

export { auth }