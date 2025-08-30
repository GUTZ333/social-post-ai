"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { handleSignInAuthSubmit } from "@/service/sign-in-auth-submit";
import { useFormSignInAuth } from "@/hooks/use-form-sign-in-auth";
import clsx from "clsx";
export default function SignInAuthForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const { register, formState: { errors, isSubmitting }, handleSubmit, reset, setError } = useFormSignInAuth();

  return (
    <form noValidate onSubmit={handleSubmit(handleSignInAuthSubmit)} className={cn("flex flex-col gap-6", className)} {...props} >
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
            <Input id="auth-pass" type="password" className={clsx(errors.authPass && "shadow-lg shadow-red-500/50 border border-red-500 focus-visible:ring-0  drop-shadow-lg p-4 bg-white rounded-lg")} {...register("authPass")} />
            {errors.authPass && (
              <span className="text-red-500 text-sm">
                {errors.authPass.message}
              </span>
            )}
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button type="button" variant="outline" className="w-full">
          <FaGoogle />
          Sign In with Google
        </Button>
        <Button type="button" variant="outline" className="w-full">
          <FaInstagram />
          Sign In with Instagram
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  )
}
