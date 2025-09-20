import Link from "next/link";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { HelpCircle, HelpCircleIcon, Settings } from "lucide-react";

export function SidebarSecondary() {
  return <SidebarGroup className="mt-auto">
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="settings">
            <Link href="/settings" className="flex items-center gap-3">
              <Settings size={17}/>
              <span>Settings</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="get help">
            <Link href="/get-help" className="flex items-center gap-3">
              <HelpCircleIcon size={17}/>
              <span>Get Help</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
}