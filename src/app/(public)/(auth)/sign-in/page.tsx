import SignInAuthForm from "@/components/sign-in-auth-form";
import Image from "next/image";
import SocialPostFavicon from "@/app/favicon.ico";
import Link from "next/link";

export default function SignInPage() {
  return <div className="grid min-h-svh lg:grid-cols-2">
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <Link href="/" className="flex items-center gap-1 font-medium">
          <div className="flex items-center justify-center rounded-md">
            <Image src={SocialPostFavicon} alt="Image" width={50} />
          </div>
          Social Post AI
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <SignInAuthForm />
        </div>
      </div>
    </div>
    <div className="bg-muted hidden lg:flex items-center justify-center">
      <Image
        src={SocialPostFavicon}
        alt="Image"
        width={100}
        className="object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
}