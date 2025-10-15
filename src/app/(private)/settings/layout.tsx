import { SettingsTabs } from "@/components/settings-tabs";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return <div className="hidden space-y-6 p-10 pb-16 md:block">
    <div className="space-y-0.5">
      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
      <p className="text-muted-foreground">
        This section allows the complete management of your account in Social Post AI. You can organize and update all the essential information that defines your identity and ensures security. Use the Profile to keep your contact details and display information up to date. Go to Account to change login credentials, review privacy settings and manage email communication preferences. For visual customization, the Appearance tab provides control over themes and interface elements.
      </p>
      <Separator className="my-6" />
    </div>
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <SettingsTabs>
        {children}
      </SettingsTabs>
    </div>
  </div>
}