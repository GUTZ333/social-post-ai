import { resetPasswordSchema, typeSetPasswordSchema } from "@/schemas/reset-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function useFormResetPassword() {
  return useForm<typeSetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema)
  })
}

export { useFormResetPassword }