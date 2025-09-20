import { MessageCircle, Search } from "lucide-react";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

export function SidebarMain() {
  return <SidebarGroup>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton variant="default" className="min-w-8 duration-200 ease-linear" tooltip="New Chat">
            <MessageCircle size={20} />
            <span>New Chat</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton variant="default" className="min-w-8 duration-200 ease-linear" tooltip="Search Chats">
            <Search size={20} />
            <span>Search Chats</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
}