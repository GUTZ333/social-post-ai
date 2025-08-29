import { setPasswordSchema, typeSetPasswordSchema } from "@/schemas/set-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function useFormSetPassword() {
  return useForm<typeSetPasswordSchema>({
    resolver: zodResolver(setPasswordSchema)
  })
}

export { useFormSetPassword }