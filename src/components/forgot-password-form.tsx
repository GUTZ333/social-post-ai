"use client";

import clsx from "clsx";
import { ComponentProps } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import SocialPostIcon from "@/app/favicon.ico";
import { useFormForgotPassword } from "@/hooks/use-form-forgot-password";
import { handleForgotPassword } from "@/handlers/forgot-password-submit";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ForgotPasswordForm({ className, ...props }: ComponentProps<"div">) {

  const { handleSubmit, formState: { errors, isSubmitting }, register } = useFormForgotPassword();

  return <div className={clsx("flex flex-col gap-6", className)} {...props} >
    <form onSubmit={handleSubmit(async ({ toMail }) => {
      const forgotPassword = await handleForgotPassword({ toMail });
      if (forgotPassword.success) {
        toast.success("If your email is registered, you will receive a password reset link.", {
          description: "Please check your inbox and follow the instructions to reset your password. If you don't see the email, be sure to check your spam or junk folder.",
          duration: 3000, // 3 segundos
        });
      }
      else {
        toast.error("An error occurred while trying to reset the password. Please try again later.", {
          description: forgotPassword.error,
          duration: 3000, // 3 segundos
        });
      }
    })} noValidate>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 font-medium"
          >
            <div className="flex size-8 items-center justify-center rounded-md">
              <Image src={SocialPostIcon} alt="Social Post AI" />
            </div>
            <span className="sr-only">Social POST AI.</span>
          </Link>
          <h1 className="text-xl font-bold">Welcome to Social POST AI.</h1>
          <div className="text-center text-sm">
            If you have not forgotten the password or came to this page by mistake, {" "}
            <Link href="/sign-in" className="underline underline-offset-4">
              Sign In
            </Link>
            .
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="auth-mail">E-mail</Label>
            <div className="flex flex-col gap-1">
              <Input
                id="auth-mail"
                type="email"
                placeholder="m@example.com"
                {...register("toMail")}
                className={clsx(errors.toMail && "shadow-lg shadow-red-500/50 border border-red-500 focus-visible:ring-0  drop-shadow-lg p-4 bg-white rounded-lg")}
              />
              {errors.toMail && <span className="text-sm text-destructive">{errors.toMail.message}</span>}
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="size-4 animate-spin"/> : "submit"}
          </Button>
        </div>
      </div>
    </form>
    <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
      This form you must pass the email of your account for you to recover its password. If you have any questions, please consult the <Link href="/terms-service">terms of service</Link> and <Link href="/privacy-policy">privacy policy</Link>.
    </div>
  </div>
}