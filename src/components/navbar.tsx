import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import SocialPostIcon from "@/images/social-post-icon.webp";

export function Navbar() {
  return (
    <>
      <nav className="p-4 flex justify-between items-center">
        {/* Container Esquerdo: Logo e Itens do Menu */}
        <div className="flex items-center justify-center space-x-2">
          {/* Logo "Launch UI" */}
          <Image src={SocialPostIcon} alt="social post icon" width={50} />
          <div className="font-bold text-lg">Social Post AI</div>

          {/* Componente NavigationMenu precisa envolver o NavigationMenuList */}
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {/* Menu "Getting started" */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* ... conteúdo do dropdown ... */}
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Menu "Components" */}

              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="font-medium">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/dashboard" className="font-medium">
                  Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Container Direito: Botões */}
        <div className="flex items-center space-x-4">
          {/* Botão "Sign in" */}
          <Button variant="ghost">
            <Link href="/sign-in">
              Sign In
            </Link>
          </Button>

          {/* Botão "Get Started" */}
          <Button>
            <Link href="/sign-up">
              Get Started
            </Link>
          </Button>
        </div>
      </nav>
    </>
  );
}