import { AccountSettingsTab } from "@/components/account-settings-tab";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Shield } from "lucide-react";

export default function AccountPage() {
  return <TabsContent value="account">
    <Card className="ml-3">
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Adjust crucial settings related to your account security and credentials. Here, you can change your password, enable two-factor authentication (2FA), and review active sessions and subscription details.
        </CardDescription>
        <CardAction><Shield size={20} /></CardAction>
      </CardHeader>
      <CardContent>
        <AccountSettingsTab />
      </CardContent>
    </Card>
  </TabsContent>
}