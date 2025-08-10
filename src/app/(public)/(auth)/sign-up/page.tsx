import SignUpAuthForm from "@/components/sign-up-auth-form";

export default function SignUpPage() {
  return <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
    <div className="w-full max-w-sm">
      <SignUpAuthForm />     
    </div>
  </div>
}