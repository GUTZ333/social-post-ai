"use client";

import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AuthUIProvider } from "@daveyplate/better-auth-ui"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
}


function AppSideBarProvider({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}

function BetterAuthUiProvider({ children }: { children: ReactNode }) {
  const router = useRouter()

  return <AuthUIProvider
    authClient={authClient}
    navigate={router.push}
    replace={router.replace}
    onSessionChange={() => {
      router.refresh()
    }}
    Link={Link}
    avatar={{
      async upload(file: File) {
        const formData = new FormData()
        formData.append("avatar", file)
        const response = await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/files`, {
          method: "POST",
          body: formData,
        })
        const { url } = await response.json()
        return url
      },
    }}
    
  >{children}</AuthUIProvider>
}

export { NextThemeProvider, AppSideBarProvider, BetterAuthUiProvider }