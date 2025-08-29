import { db } from "@/db/prisma";
import { envs } from "@/schemas/envs-schema";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { resend } from "./resend";
import checkMailTemplate from "@/templates/verify-mail-template";
import ResetPasswordTemplate from "@/templates/reset-password-template";
import * as bcryptjs from "bcryptjs";

const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "mysql",
  }),
  rateLimit: {
    enabled: true,
    window: 10,
    max: 100
  },
  appName: "social-post-ai",
  verification: {
    fields: {
      value: "verification_value",
      identifier: "verification_identifier",
      expiresAt: "verification_expires_at",
      createdAt: "verification_created_at",
      updatedAt: "verification_updated_at"
    }
  },
  account: {
    accountLinking: {
      enabled: false
    },
    fields: {
      password: "account_pass",
      providerId: "provider_id",
      userId: "profile_id",
      accountId: "account_id",
      idToken: "id_token",
      accessToken: "account_access_token",
      accessTokenExpiresAt: "account_access_token_expires_at",
      refreshToken: "account_refresh_token",
      refreshTokenExpiresAt: "account_refresh_token_expires_at",
      scope: "account_scope",
      createdAt: "account_created_at",
      updatedAt: "account_updated_at"
    }
  },
  session: {
    expiresIn: 30 * 24 * 60 * 60, // 7 Days
    updateAge: 60 * 60 * 24, // 1 Day
    freshAge: 60 * 5,
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60
    },
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
  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    expiresIn: 60 * 60,
    autoSignInAfterVerification: true,
    async sendVerificationEmail({ url, user: { name, email } }) {
      const link = `${url}&redirectTo=/dashboard`;
      await resend.emails.send({
        from: envs.RESEND_FROM,
        to: email,
        subject: "Verify E-mail",
        react: checkMailTemplate({ url: link, username: name }),
      })
    },
  },
  emailAndPassword: {
    minPasswordLength: 6,
    maxPasswordLength: 40,
    password: {
      async hash(password) {
        return await bcryptjs.hash(password, 10)
      },
      async verify({ hash, password }) {
        return await bcryptjs.compare(password, hash)
      },
    },
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
    async sendResetPassword({ url, user: { email, name } }) {
      const link = `${url}&redirectTo=/reset-password`
      await resend.emails.send({
        from: envs.RESEND_FROM,
        to: email,
        subject: "Change Password",
        react: ResetPasswordTemplate({ resetUrl: link, username: name })
      })
    },
  },
  plugins: [
    nextCookies(),
  ],
  socialProviders: {
    google: {
      clientId: envs.GOOGLE_CLIENT_ID,
      clientSecret: envs.GOOGLE_CLIENT_SECRET,
      redirectURI: `${envs.NEXT_URL}/api/auth/callback/google`
    },
  },
  advanced: {
    database: {
      generateId: false
    }
  },
})

export { auth }