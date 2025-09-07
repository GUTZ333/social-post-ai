"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { handleSignInAuthSubmit } from "@/handlers/sign-in-auth-submit";
import { useFormSignInAuth } from "@/hooks/use-form-sign-in-auth";
import clsx from "clsx";
import { toast, Toaster } from "sonner";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { handleSignInGoogle } from "@/handlers/sign-in-google";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In || Social Post AI",
}

export default function SignInAuthForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const { register, formState: { errors, isSubmitting }, handleSubmit, reset, setError } = useFormSignInAuth();

  return (
    <form noValidate onSubmit={handleSubmit(async ({ authMail, authPass }) => {

      const signIn = await handleSignInAuthSubmit({
        authMail, authPass
      });

      if (signIn.success) {
        toast.success("Login sucessfully!!", {
          description: "You are already logged in to the platform!",
          duration: 3000 // 3 segundos
        })
        redirect(signIn.data.url as string)
      }
      else {
        const { error } = signIn;
        const { USER_NOT_FOUND, INVALID_EMAIL_OR_PASSWORD, INVALID_PASSWORD, INVALID_EMAIL, EMAIL_NOT_VERIFIED } = auth.$ERROR_CODES;
        toast.error("Login is failed.", {
          duration: 3000, // 3 segundos,
        })
        switch (error) {
          case USER_NOT_FOUND:
            setError("authMail", {
              message: error
            })
            break;
          case EMAIL_NOT_VERIFIED:
            setError("authMail", {
              message: error
            })
            break;
          case INVALID_EMAIL_OR_PASSWORD:
            setError("authPass", {
              message: error
            })
            setError("authMail", {
              message: error
            })
            break;
          case INVALID_EMAIL:
            setError("authMail", {
              message: error
            })
            break;
          case INVALID_PASSWORD:
            setError("authPass", {
              message: error
            })
            break;
          default:
            break
        }
      }

    })} className={cn("flex flex-col gap-6", className)} {...props} >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Sign In to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to Sign In to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="auth-mail">E-mail</Label>
          <div className="flex flex-col gap-1">
            <Input id="auth-mail" type="email" placeholder="m@example.com" className={clsx(errors.authMail && "shadow-lg shadow-red-500/50 border border-red-500 focus-visible:ring-0  drop-shadow-lg p-4 bg-white rounded-lg")} {...register("authMail")} />
            {errors.authMail && (
              <span className="text-red-500 text-sm">
                {errors.authMail.message}
              </span>
            )}
          </div>
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="auth-pass">Password</Label>
            <Link
              href="/forgot-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Input placeholder="**********" id="auth-pass" type="password" className={clsx(errors.authPass && "shadow-lg shadow-red-500/50 border border-red-500 focus-visible:ring-0  drop-shadow-lg p-4 bg-white rounded-lg")} {...register("authPass")} />
            {errors.authPass && (
              <span className="text-red-500 text-sm">
                {errors.authPass.message}
              </span>
            )}
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : "Sign In"}
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button type="button" onClick={handleSignInGoogle} variant="outline" className="w-full">
          <FaGoogle />
          Sign In with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
      <Toaster position="top-center" />
    </form>
  )
}
