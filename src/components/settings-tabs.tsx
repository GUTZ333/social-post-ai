"use client"

import { Palette, Shield, User2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

export function SettingsTabs({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const currentTab = pathname.split("/")[2] || "profile"

  return <>
    <Tabs 
      orientation="vertical" 
      defaultValue="profile" 
      value={currentTab} 
      onValueChange={(val) => router.push(`/settings/${val}`)} 
      className="w-full flex-shrink-0">
      <div className="flex flex-row">
        <div className="flex-shrink-0">
          <TabsList className="flex flex-col items-start h-auto p-0 bg-transparent space-y-1">
            <TabsTrigger
              value="profile"
              className="w-full justify-start px-3 py-2 data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-lg flex items-center gap-2"
            >
              <User2 size={16} /> profile
            </TabsTrigger>

            <TabsTrigger
              value="account"
              className="w-full justify-start px-3 py-2 data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-lg flex items-center gap-2"
            >
              <Shield size={16} /> Account
            </TabsTrigger>

            <TabsTrigger
              value="appearance"
              className="w-full justify-start px-3 py-2 data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-lg flex items-center gap-2"
            >
              <Palette size={16} /> Appearance
            </TabsTrigger>

          </TabsList>
        </div>

        <div className="flex-1">
          {children}
        </div>
      </div>
    </Tabs>
  </>
}