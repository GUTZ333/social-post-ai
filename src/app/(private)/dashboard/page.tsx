"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  return <div>
    <Button variant="destructive" onClick={async() => {
      await authClient.signOut()
    }}>sign-out</Button>
    <h1>Nome do usuário: {}</h1>
    <h1>Email do usuário: {}</h1>
  </div>
}