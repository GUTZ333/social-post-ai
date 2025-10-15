import { AppearanceSettingsTabs } from "@/components/appearance-settings-tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Palette } from "lucide-react";

export default function AppearancePage() {

  return <TabsContent value="appearance">
    <Card className="ml-3">
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Optimize your user experience by adjusting the visual settings of the application. Set the preferred color scheme (Clear or Dark) to improve readability and reduce visual fatigue. Changes are applied instantly and saved to maintain consistency across your dashboard sessions.
        </CardDescription>
        <CardAction><Palette size={20} /></CardAction>
      </CardHeader>
      <CardContent>
        <AppearanceSettingsTabs />
      </CardContent>
    </Card>
  </TabsContent>
}