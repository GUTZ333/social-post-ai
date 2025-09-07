import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Logo from "@/images/social-post-icon.webp"
import { Menu } from "lucide-react";
import Link from "next/link";

export function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-4">
        <SheetHeader>
          <Image src={Logo} alt="Social Post AI" width={50} />
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Navigate through the app.</SheetDescription>
        </SheetHeader>
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href="/about">
            About
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href="/terms">
            Terms
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href="/contact">
            Contact Us
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  )
}