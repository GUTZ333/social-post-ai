"use client";

import { LogOut, Moon, MoreVertical, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";
import { useTheme } from "next-themes";
import { handleSignOut } from "@/handlers/sign-out";

export function SidebarUser() {
  const { isMobile } = useSidebar()
  const { theme, setTheme } = useTheme()

  return <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <Avatar className="w-8 h-8 rounded-full">
            <AvatarImage src="https://github.com/GUTZ333.png" />
            <AvatarFallback className="bg-muted rounded-full">
              <Skeleton className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">GUTZ333</span>
            <span className="text-muted-foreground truncate text-xs">
              gutz@example.com
            </span>
          </div>
          <DropdownMenuTrigger asChild>
            <MoreVertical className="ml-auto size-4" />
          </DropdownMenuTrigger>
        </SidebarMenuButton>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          side={isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}>
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src="https://github.com/GUTZ333.png" alt="" />
                <AvatarFallback>
                  <Skeleton className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">GUTZ 333</span>
                <span className="text-muted-foreground truncate text-xs">
                  gutz@example.com
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