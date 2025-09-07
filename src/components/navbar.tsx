import Image from "next/image";
import Logo from "@/images/social-post-icon.webp"
import { NavMenu } from "./nav-menu";
import { Button } from "./ui/button";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";

export function Navbar() {
  return (
    <>
      <div className="border-b border-b-white/5">
        <nav className="h-16 border-b">
          <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <Link href="/" className="flex gap-2 items-center">
                <Image width={50} src={Logo} alt="Social Post AI" />
                <h2 className="text-lg font-semibold hidden md:block">Social Post AI</h2>
              </Link>
            </div>
            {/* Desktop Menu */}
            <NavMenu className="hidden md:block font-semibold" />
            <div className="flex items-center gap-3">
              <Button variant="outline" className="hidden sm:inline-flex" asChild>
                <Link href="/sign-in">
                  Sign In
                </Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">
                  Get Started
                </Link>
              </Button>
              {/* Mobile Menu */}
              <div className="md:hidden">
                <NavigationSheet />
              </div>
            </div>
          </div>
        </nav >
      </div >
    </>
  );
}