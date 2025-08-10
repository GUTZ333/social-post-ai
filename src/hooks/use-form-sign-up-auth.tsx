"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpAuthSchema, type typeSignUpAuthSchema } from '../schemas/sign-up-schema';

function useFormSignUpAuth() {
  return useForm<typeSignUpAuthSchema>({
    resolver: zodResolver(signUpAuthSchema),
  });
}

export { useFormSignUpAuth };