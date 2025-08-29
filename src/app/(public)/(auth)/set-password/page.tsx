import SetPasswordForm from "@/components/set-password-form"

export default function SetPasswordPage() {
  return <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
    <div className="w-full max-w-sm">
      <SetPasswordForm />
    </div>
  </div>
}