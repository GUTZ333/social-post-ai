import { forgotPasswordSchema, typeForgotPasswordSchema } from "@/schemas/forgot-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function useFormForgotPassword() {
  return useForm<typeForgotPasswordSchema>({ resolver: zodResolver(forgotPasswordSchema) })
}

export { useFormForgotPassword };