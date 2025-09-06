"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function PageNotFound() {
  const path = usePathname();
  return <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="w-full space-y-6 text-center">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl transition-transform hover:scale-110">404</h1>
        <p className="text-sm font-normal">This page {path.replace(/^\/+/, "")} could not be found.</p>
        <p className="text-sm font-normal">Looks like you've ventured into the unknown digital realm.</p>
      </div>
      <Button variant="destructive" asChild>
        <Link href="/" prefetch={false}>Go back home</Link>
      </Button>
    </div>
  </div>
}