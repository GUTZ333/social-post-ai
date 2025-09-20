"use client"

import Link from "next/link";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { ScrollArea } from "./ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MoreVertical, Pencil, Share, Trash } from "lucide-react";

export function SidebarChats() {

  return <SidebarGroup className="group-data-[collapsible=icon]:hidden">
    <SidebarGroupLabel>Chats</SidebarGroupLabel>
    <ScrollArea>
      <SidebarMenu className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <DropdownMenu>
              <SidebarMenuButton tooltip={`Chat ${index}`}>
                <Link href="#">Chat {index + 1}</Link>
                <DropdownMenuTrigger className="ml-auto" asChild>
                  <MoreVertical size={15} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>Chat {index + 1}</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Share
                      <Share />
                      <DropdownMenuShortcut>⌘s</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Rename
                      <Pencil />
                      <DropdownMenuShortcut>⌘s</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Delete
                      <Trash />
                      <DropdownMenuShortcut>⌘d</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </SidebarMenuButton>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </ScrollArea>
  </SidebarGroup >
}