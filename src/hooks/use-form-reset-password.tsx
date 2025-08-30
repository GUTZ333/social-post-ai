import { setPasswordSchema, typeSetPasswordSchema } from "@/schemas/set-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function useFormResetPassword() {
  return useForm<typeSetPasswordSchema>({
    resolver: zodResolver(setPasswordSchema)
  })
}

export { useFormResetPassword }