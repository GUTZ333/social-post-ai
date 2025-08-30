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
  // passando o Prisma ORM do meu banco MySQL para adaptação e automatização do Better Auth com o meu banco
  database: prismaAdapter(db, {
    provider: "mysql",
  }),
  // Limit de requisição(Login, Cadastro)
  rateLimit: {
    enabled: true,
    window: 10,
    max: 100
  },
  // Nome do meu software
  appName: "social-post-ai",
  // personalizando os nomes dos campos de verificação para os meus nomes personalizados do meu schema
  verification: {
    fields: {
      value: "verification_value",
      identifier: "verification_identifier",
      expiresAt: "verification_expires_at",
      createdAt: "verification_created_at",
      updatedAt: "verification_updated_at"
    }
  },
  // personalizando os nomes dos campos de contas para os meus nomes personalizados do meu schema
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
  // personalizando os nomes dos campos de sessões para os meus nomes personalizados do meu schema
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
  // personalizando os nomes dos campos de usuário para os meus nomes personalizados do meu schema
  user: {
    // Personalizando o nome do Schema de Usuário para profiles
    modelName: "profiles",
    fields: {
      email: "profile_auth_mail",
      name: "profile_auth_username",
      createdAt: "profile_created_at",
      updatedAt: "profile_updated_at",
      image: "profile_avatar_url",
      emailVerified: "profile_auth_mail_verified"
    },
    // adicionando um campo que faz parte dos dados para cadastro e sessões do usuário
    additionalFields: {
      // adicionando o campo de data de nascimento
      profile_auth_birth_date: {
        type: "date",
        input: true,
        required: true
      },
    },
  },
  // Configurando a lógica de verificação de e-mail do Better Auth
  emailVerification: {
    sendOnSignUp: true, // Quando houver a ação de Cadastro, automaticamente será enviado um e-mail para verificação do e-mail do usuário
    sendOnSignIn: false,
    expiresIn: 60 * 60, // Cadas sessão irá durar por 1 hora
    autoSignInAfterVerification: true, // depois da verificação, automaticamente o usuário estará logado
    // callback para ação de verificação de e-mail do usuário
    async sendVerificationEmail({ url, user: { name, email } }) {
      const link = `${url}&redirectTo=/dashboard`;
      // enviando e-mail com template do React Email, uma interface dizendo para o usuário verificar o e-mail
      await resend.emails.send({
        from: envs.RESEND_FROM,
        to: email,
        subject: "Verify E-mail",
        react: checkMailTemplate({ link, username: name }),
      })
    },
  },
  // Configurando sessões pelo provedor de credenciais
  emailAndPassword: {
    // validação de caracteres de senha
    minPasswordLength: 6,
    maxPasswordLength: 40,
    // configurando a forma de hasheamento e verificação de senha pelo bcryptjs
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
    // callback para quando o usuário quiser recuperar sua conta, através da troca de senha
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
  // Plugins integrados com o Better Auth
  plugins: [
    // Next Cookie é um plugin para a sessão ser armazenada em cookies http-only
    nextCookies(),
  ],
  // configurando provedores de plataformas integradas com o Better Auth
  socialProviders: {
    // configurando o provedor do Google passando as credencias geradas dentro do environment
    google: {
      clientId: envs.GOOGLE_CLIENT_ID,
      clientSecret: envs.GOOGLE_CLIENT_SECRET,
      redirectURI: `${envs.NEXT_URL}/api/auth/callback/google`
    },
  },
  // configurando a ausência de geração de id desnecessário
  advanced: {
    database: {
      generateId: false
    }
  },
})

export { auth }