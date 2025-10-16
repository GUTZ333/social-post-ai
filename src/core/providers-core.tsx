"use client";

import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { trpc } from "@/lib/trpc-axios";

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
        const buffer = await file.arrayBuffer()
        const base64 = Buffer.from(buffer).toString("base64")

        const url = await trpc.uploadImage.mutate({
          fileName: file.name,
          fileBase64: base64,
          fileType: file.type
        })

        return url
      },
    }}

  >{children}</AuthUIProvider>
}

export { NextThemeProvider, AppSideBarProvider, BetterAuthUiProvider }