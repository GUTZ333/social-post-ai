"use client";

import { signInAuthSchema, typeSignInAuthSchema } from "@/schemas/sign-in-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function useFormSignInAuth() {
  return useForm<typeSignInAuthSchema>({
    resolver: zodResolver(signInAuthSchema),
  });
}

export { useFormSignInAuth };