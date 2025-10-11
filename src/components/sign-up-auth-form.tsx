"use client";

import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SocialPostIcon from "@/app/favicon.ico";
import Image from "next/image";
import { useFormSignUpAuth } from "@/hooks/use-form-sign-up-auth";
import { handleSignUpAuthSubmit } from "@/handlers/sign-up-auth-submit";
import { FaGoogle } from "react-icons/fa";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import { auth } from "@/lib/auth";
import { handleSignInGoogle } from "@/handlers/sign-in-google";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up || Social Post AI",
}

export default function SignUpAuthForm({ className, ...props }: ComponentProps<"div">) {

  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const { register, formState: { errors, isSubmitting }, handleSubmit, reset, control, setError } = useFormSignUpAuth();

  return (
    <div className={clsx("flex flex-col gap-6", className)} {...props}>
      <form noValidate onSubmit={handleSubmit(async ({ authMail, authPass, authUsername }) => {
        const handle = await handleSignUpAuthSubmit({
          authMail,
          authPass,
          authUsername
        })

        if (handle.success) {
          reset();
          toast.success("Sign Up sucessfully!!", {
            description: "Your account was created now. verify your email to start using it.",
            duration: 4000, // 4 segundos
          })
        }
        else {
          const { error } = handle;
          const { USER_ALREADY_EXISTS, ACCOUNT_NOT_FOUND } = auth.$ERROR_CODES
          toast.error("Sign Up failed.", {
            duration: 3000, // 3 segundos
          })
          switch (error) {
            case USER_ALREADY_EXISTS:
              setError("authMail", {
                message: error
              })
              break;
            case ACCOUNT_NOT_FOUND:
              setError("authPass", {
                message: error
              })
              break;
            default:
              break
          }
        }
      })}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <Image
                  src={SocialPostIcon}
                  width={70}
                  alt="Social Post AI"
                  className="object-cover"
                />
              </div>
              <span className="sr-only">Social Post AI</span>
            </Link>
            <h1 className="text-xl font-bold">Welcome to Social Post AI.</h1>
            <div className="text-center text-sm">
              You have an account?{" "}
              <Link href="/sign-in" className="underline underline-offset-4">
                Sign In
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid gap-3">
              <Label htmlFor="auth-username">Username</Label>
              <div className="flex flex-col gap-1">
                <Input
                  id="auth-username"
                  type="text"
                  placeholder="type your username..."
                  {...register("authUsername")}
                  className={clsx(errors.authUsername && "shadow-lg shadow-red-500/50 border border-red-500 focus-visible:ring-0  drop-shadow-lg p-4 bg-white rounded-lg")}
                />
                {errors.authUsername && (
                  <span className="text-destructive text-sm">
                    {errors.authUsername.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="auth-mail">E-mail</Label>
              <div className="flex flex-col gap-1">
                <Input
                  id="auth-mail"
                  type="email"
                  placeholder="m@example.com"
                  {...register("authMail")}
                  className={clsx(errors.authMail && "shadow-lg shadow-red-500/50 border border-red-500 focus-visible:ring-0  drop-shadow-lg p-4 bg-white rounded-lg")}
                />
                {errors.authMail && (
                  <span className="text-destructive text-sm">
                    {errors.authMail.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="auth-pass">Password</Label>
              <div className="flex flex-col gap-1">
                <Input
                  id="auth-pass"
                  type="password"
                  placeholder="********"
                  {...register("authPass")}
                  className={clsx(errors.authPass && "shadow-lg shadow-red-500/50 border border-red-500 focus-visible:ring-0  drop-shadow-lg p-4 bg-white rounded-lg")}
                />
                {errors.authPass && (
                  <span className="text-destructive text-sm">
                    {errors.authPass.message}
                  </span>
                )}
              </div>
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : "Sign Up"}
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>

          <Button className="w-full" type="button" variant="outline" onClick={handleSignInGoogle}>
            <FaGoogle size={24} className="" />
            Google
          </Button>

        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-sm text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </div>
      <Toaster position="top-center" />
    </div>
  )
}