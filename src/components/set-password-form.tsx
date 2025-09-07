"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import SocialPostIcon from "@/images/social-post-icon.webp"
import { useFormResetPassword } from "@/hooks/use-form-reset-password"
import clsx from "clsx";
import { handleResetPassword } from "@/handlers/reset-password";
import { toast, Toaster } from "sonner";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useFormResetPassword();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(async ({ currentPass }) => {
        const token = searchParams.get("token") || "";
        const handle = await handleResetPassword({ currentPass }, token)
        if (handle.success) {
          toast.success("Password successfully changed", {
            description: "You can now sign in with your new password.",
            duration: 3000, // 3 segundos
          });
        }
      })} noValidate >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-10 items-center justify-center rounded-md">
                <Image src={SocialPostIcon} alt="social-post-ai" />
              </div>
              <span className="sr-only">Social Post AI.</span>
            </Link>
            <h1 className="text-xl font-bold">Recover Password</h1>
            <div className="text-center text-sm">
              to recover your account, create a new password in the following field and then <Link href="/sign-in" className="underline underline-offset-4">sign in</Link> with the current password.
              If you already know your account password,
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="pass">New Password</Label>
              <div className="flex flex-col gap-1">
                <Input
                  {...register("currentPass")}
                  id="pass"
                  type="password"
                  placeholder="*********"
                  className={clsx(errors.currentPass && "shadow-lg shadow-red-500/50 border border-red-500 focus-visible:ring-0  drop-shadow-lg p-4 bg-white rounded-lg")}
                />
                {errors.currentPass && <span className="text-red-500 text-sm">{errors.currentPass.message}</span>}
              </div>
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? "Seting Password" : "Set Password"}
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </div>
      <Toaster position="top-center" />
    </div>
  )
}
