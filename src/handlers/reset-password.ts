"use server";

import { auth } from '@/lib/auth';
import { typeSetPasswordSchema } from '@/schemas/reset-password-schema';
import { headers } from 'next/headers';

export async function handleResetPassword({ currentPass }: typeSetPasswordSchema, token: string) {
  try {
    await auth.api.resetPassword({
      body: {
        newPassword: currentPass,
        token
      },
      method: "POST",
      headers: await headers()
    })
  }
  catch (err) {
    console.error(err);
  }
}