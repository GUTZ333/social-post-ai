"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  const { value } = authClient.useSession;
  const name = value?.data?.user.name
  const email = value?.data?.user.email
  return <div>
    <Button variant="destructive" onClick={async () => {
      await authClient.signOut()
    }}>sign-out</Button>
    <h1>Nome do usuário: {name}</h1>
    <h1>Email do usuário: {email}</h1>
  </div>
}