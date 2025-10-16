import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Image from "next/image";
import Icon from "@/images/social-post-icon.webp"
import React from "react";
import { SidebarMain } from "./sidebar-main";
import { SidebarChats } from "./sidebar-chats";
import { SidebarUser } from "./sidebar-user";
import { SidebarSecondary } from "./sidebar-secondary";

export function AppSidebar({ ...props } : React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/dashboard" className="flex items-center">
                <Image src={Icon} alt="Social Post AI" width={35} height={35} />
                <span className="text-base font-semibold">Social Post AI</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMain />
        <SidebarChats />
        <SidebarSecondary />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  )
}