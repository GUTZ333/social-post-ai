import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AppSideBarProvider, BetterAuthUiProvider, NextThemeProvider } from "@/core/providers-core";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <BetterAuthUiProvider>
          <NextThemeProvider>
            <AppSideBarProvider>
              <AppSidebar collapsible="icon" variant="inset" />
              <SidebarInset>
                <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
                  <div className="flex w-full items-center gap-1 px-4 lg:gap-2 p-3">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                      orientation="vertical"
                      className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    <h1 className="text-base font-medium">Documents</h1>
                    <div className="ml-auto flex items-center gap-2">
                      <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
                        <Link
                          href="https://github.com/GUTZ333/social-post-ai"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="dark:text-foreground"
                        >
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </header>
                {children}
              </SidebarInset>
            </AppSideBarProvider>
          </NextThemeProvider>
        </BetterAuthUiProvider>
      </body>
    </html>
  );
}
