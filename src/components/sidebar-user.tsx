"use client";

import { LogOut, Moon, MoreVertical, Sun, User, UserCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";
import { useTheme } from "next-themes";
import { handleSignOut } from "@/handlers/sign-out";
import { authClient } from "@/lib/auth-client";

export function SidebarUser() {
  const { useSession } = authClient;
  const { data: session, isPending } = useSession();

  const username = session?.user.name;
  const email = session?.user.email;
  const image = session?.user.image;

  const { isMobile } = useSidebar()
  const { theme, setTheme } = useTheme()

  return <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
            <Avatar className="w-8 h-8 rounded-full">

              {isPending ? (
                <AvatarFallback className="bg-muted rounded-full">
                  <Skeleton className="w-8 h-8" />
                </AvatarFallback>
              ) : image ? (
                <AvatarImage src={image} />
              ) : (
                <AvatarFallback className="bg-muted rounded-full">
                  <UserCircle className="w-8 h-8" />
                </AvatarFallback>
              )}

            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {isPending ? <Skeleton className="h-4 w-[160px] mb-1 rounded" /> : username}
              </span>
              <span className="text-muted-foreground truncate text-xs">
                {isPending ? <Skeleton className="h-3 w-[180px] rounded" /> : email}
              </span>
            </div>
            <MoreVertical className="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          side={isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}>
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-full">
                {isPending ? (
                  <AvatarFallback className="bg-muted rounded-full">
                    <Skeleton className="w-8 h-8" />
                  </AvatarFallback>
                ) : image ? (
                  <AvatarImage src={image} />
                ) : (
                  <AvatarFallback className="bg-muted rounded-full">
                    <UserCircle className="w-8 h-8" />
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {isPending ? <Skeleton className="w-8 h-8" /> : username}
                </span>
                <span className="text-muted-foreground truncate text-xs">
                  {isPending ? <Skeleton className="w-8 h-8" /> : email}
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Moon /> : <Sun />}
              Toggle Theme
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
}