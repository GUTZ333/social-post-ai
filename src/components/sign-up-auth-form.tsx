"use client";

import clsx from "clsx";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SocialPostIcon from "@/app/favicon.ico";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { useFormSignUpAuth } from "@/hooks/use-form-sign-up-auth";
import { handleSignUpAuthSubmit } from "@/service/sign-up-auth-submit";
import { Controller } from "react-hook-form";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { FaGoogle, FaInstagram } from "react-icons/fa";

export default function SignUpAuthForm({ className, ...props }: ComponentProps<"div">) {

  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const { register, formState: { errors, isSubmitting, isSubmitSuccessful }, handleSubmit, reset, control } = useFormSignUpAuth();

  return (
    <div className={clsx("flex flex-col gap-6", className)} {...props}>
      <form noValidate onSubmit={handleSubmit(async (data) => {
        await handleSignUpAuthSubmit(data);
        if (isSubmitSuccessful) {
          reset();
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
            <div className="grid gap-3 mb-5">
              <Label htmlFor="authBirthdate" className="px-1">Birth Date</Label>
              <div className="flex flex-col gap-1">
                <Controller name="authBirthDate" control={control} render={({ field: { value, onChange } }) => (
                  <Popover open={openPopover} onOpenChange={setOpenPopover}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" id="date" className={clsx("justify-between font-normal ", errors.authBirthDate && "shadow-lg shadow-red-500/50 border border-red-500 focus-visible:ring-0  drop-shadow-lg p-4 bg-white rounded-lg")}>
                        {value ? (
                          format(value, "PPP", { locale: enUS })
                        ) : (
                          <span>Select Date</span>
                        )}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar mode="single" captionLayout="dropdown" selected={value} onSelect={(date) => {
                        onChange(date);
                        setOpenPopover(false);
                      }} initialFocus locale={enUS} />
                    </PopoverContent>
                  </Popover>
                )} />
                {errors.authBirthDate && (
                  <span className="text-destructive text-sm">
                    {errors.authBirthDate.message}
                  </span>
                )}
              </div>
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" type="button" className="w-full">
              <FaInstagram size={24} className="" />
              Instagram
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <FaGoogle size={24} className="" />
              Google
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-sm text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  )
}