"use server";

import { auth } from '@/lib/auth';
import { typeSetPasswordSchema } from '@/schemas/reset-password-schema';
import { BetterAuthError } from 'better-auth';
import { headers } from 'next/headers';

export async function handleResetPassword({ currentPass }: typeSetPasswordSchema, token: string): Promise<{ success: true, data: Awaited<ReturnType<typeof auth.api.resetPassword>> } | { success: false, error: BetterAuthError["message"] }> {
  try {
    const data = await auth.api.resetPassword({
      body: {
        newPassword: currentPass,
        token
      },
      method: "POST",
      headers: await headers()
    })
    return { success: true, data };
  }
  catch (err) {
    console.error(err);
    return { success: false, error: (err as BetterAuthError)["message"] };
  }
}