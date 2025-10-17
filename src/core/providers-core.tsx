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
        // converte o arquivo em um array de buffer(representação binária de arquivo)
        // convertendo este ArrayBuffer em uma string de Base64 compatível com formato JSON INPUT
        const buffer = await file.arrayBuffer()
        const base64 = Buffer.from(buffer).toString("base64")

        const url = await trpc.pinataRouter.uploadImage.mutate({
          fileName: file.name,
          fileBase64: base64,
          fileType: file.type
        })

        return url
      },
      async delete(url) {
        // pegando parte da url da imagem do avatar que está para ser deletado
        const urlParts = url.split("/")
        const cid = urlParts.pop() as string
        if (!cid) return 
        await trpc.pinataRouter.unpinImage.mutate({cid})
      },      
    }}

  >{children}</AuthUIProvider>
}

export { NextThemeProvider, AppSideBarProvider, BetterAuthUiProvider }