import { db } from "@/db/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import * as bcryptjs from "bcryptjs";
import { resend } from "./resend";
import ResetPasswordTemplate from "@/templates/reset-password-template";
import VerifyMailTemplate from "@/templates/verify-mail-template";

export const auth = betterAuth({
  // Dando o acesso do Prisma ORM para o better auth fazer as automações deles no meu banco MySQL
  database: prismaAdapter(db, {
    provider: "mysql"
  }),
  // Provider application name
  appName: "Social Post AI",
  // Configurando o serviço de verificação de email
  emailVerification: {
    // ele será automatizacamente acionado quando o usuário se inscrever ou entrar
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true, // após a verificação do email, ele loga o usuário automaticamente
    // função que envia o email de verificação
    async sendVerificationEmail({ user: { name, email }, url }) {
      // enviando o email de verificação usando o Resend com o template react
      await resend.emails.send({
        from: process.env.NEXT_PUBLIC_RESEND_FROM as string,
        to: email,
        subject: "Verify your email",
        react: VerifyMailTemplate({ name: name, url })
      })
    },
  },
  // Configurando provedor de autenticação por credenciais
  emailAndPassword: {
    requireEmailVerification: true,
    async sendResetPassword({ url, user: { email, name } }) {
      await resend.emails.send({
        from: process.env.NEXT_PUBLIC_RESEND_FROM as string,
        to: email,
        subject: "Reset your password",
        react: ResetPasswordTemplate({ email, name, resetUrl: url })
      })
    },
    enabled: true,
    autoSignIn: true,
    password: {
      async hash(password) {
        return await bcryptjs.hash(password, 10)
      },
      async verify({ hash, password }) {
        return await bcryptjs.compare(password, hash)
      },
    }
  },
  // Configurando provedor de autenticação com o Google
  socialProviders: {
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
      accessType: "offline",  
      prompt: "select_account consent",
      scope: ["https://www.googleapis.com/auth/user.birthday.read", "email", "profile", "openid"],
      disableSignUp: false,

      async mapProfileToUser({ picture, name, email, email_verified, }) {
        return {
          image: picture,
          name,
          email,
          emailVerified: email_verified,
        }
      }
    }
  },
  // assinalando as credenciais para a comunicação da aplicação com a Api do Better Auth
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL as string,
  secret: process.env.NEXT_PUBLIC_BETTER_AUTH_SECRET as string,

  // Plugins que iram fazer parte da aplicação
  plugins: [nextCookies()], // Next Cookies

  // dizendo que a data de nascimento fará parte do cadastro dentro do usuário
  user: {
    additionalFields: {
      birth_date: {
        type: "date",
        required: true,
        input: true
      }
    }
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    disableSessionRefresh: false, // se true, a sessão não será renovada automaticamente
    freshAge: 60 * 60 * 24, // 24 hours (em segundos) - define o tempo para a sessão ser considerada "fresca"
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    }
  }
})