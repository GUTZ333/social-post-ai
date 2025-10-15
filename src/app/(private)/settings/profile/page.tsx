import { ProfileSettingsTab } from "@/components/profile-settings-tab";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { User2 } from "lucide-react";

export default function ProfilePage() {
  return <TabsContent value="profile">
    <Card className="ml-3">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Update and manage your personal details, including your name, email address, username, and profile picture. This information is used across the application to identify you and personalize your experience.
        </CardDescription>
        <CardAction><User2 size={20} /></CardAction>
      </CardHeader>
      <CardContent>
        <ProfileSettingsTab />
      </CardContent>
    </Card>
  </TabsContent>
}