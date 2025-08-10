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
import { handleForgotPasswordSubmit } from "@/service/forgot-password-submit";
import { error } from "console";

export default function ForgptPasswordForm({ className, ...props }: ComponentProps<"div">) {

  const { handleSubmit, reset, formState: { errors, isSubmitSuccessful, isSubmitting }, register } = useFormForgotPassword();

  return <div className={clsx("flex flex-col gap-6", className)} {...props} >
    <form onSubmit={handleSubmit(async (data) => {
      await handleForgotPasswordSubmit(data);
      if (!isSubmitSuccessful) {
        reset();
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
            <div className="flex flex-col gap-2">
              <Input
                id="auth-mail"
                type="email"
                placeholder="m@example.com"
                {...register("authMail")}
                className={clsx()}
              />
              {errors.authMail && <span className="text-sm text-destructive">{errors.authMail.message}</span>}
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "submiting..." : "submit"}
          </Button>
        </div>
      </div>
    </form>
    <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
      This form you must pass the email of your account for you to recover its password. If you have any questions, please consult the <Link href="/terms-service">terms of service</Link> and <Link href="/privacy-policy">privacy policy</Link>.
    </div>
  </div>
}