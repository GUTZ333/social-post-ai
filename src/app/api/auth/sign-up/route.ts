import { db } from "@/db/prisma";
import { typeSignUpAuthSchema } from "@/schemas/sign-up-schema";
import { NextRequest, NextResponse } from "next/server";
import * as bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  const errors: Record<string, string> = {};

  const body: typeSignUpAuthSchema = await request.json();
  const { authBirthDate, authMail, authPass, authUsername } = body;

  const searchMail = await db.profile.findUnique({
    where: {
      profile_auth_mail: authMail
    }
  })

  const searchUsername = await db.profile.findFirst({
    where: {
      profile_auth_username: authUsername
    }
  })

  if (searchMail) errors.authMail = "this e-mail already exist."
  if (searchUsername) errors.authUsername = "this username already exist."

  // se houver um ou mais de um erro neste objeto de erros, ele retorna tudo de uma vez na resposta da requisição
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 })
  }

  const hashPass = await bcryptjs.hash(authPass, 10);

  const createProfile = await db.profile.create({
    data: {
      profile_auth_mail: authMail,
      profile_auth_username: authUsername,
      profile_birth_date: authBirthDate,
      profile_auth_pass: hashPass,
      profile_provider: "credentials"
    }
  })

  return NextResponse.json({
    message: "Profile create with success!!",
    createProfile
  })
}