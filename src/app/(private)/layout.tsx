import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextThemeProvider } from "@/core/providers-core";

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
        <NextThemeProvider>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
