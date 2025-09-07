import Image from "next/image";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "@/images/social-post-icon.webp"
import { Menu } from "lucide-react";

export function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Image src={Logo} alt="Social Post AI" width={50} />
      </SheetContent>
    </Sheet>
  )
}