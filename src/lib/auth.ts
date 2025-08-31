import { db } from "@/db/prisma";
import { envs } from "@/schemas/envs-schema";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"
import { nextCookies } from "better-auth/next-js";
import * as bcryptjs from "bcryptjs"

export const auth = betterAuth({
  // Dando o acesso do Prisma ORM para o better auth fazer as automações deles no meu banco MySQL
  database: prismaAdapter(db, {
    provider: "mysql"
  }),

  // Configurando provedor de autenticação por credenciais
  emailAndPassword: {
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
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }
  },
  // assinalando as credenciais para a comunicação da aplicação com a Api do Better Auth
  baseURL: process.env.BETTER_AUTH_URL as string,
  secret: process.env.BETTER_AUTH_SECRET as string,

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
})