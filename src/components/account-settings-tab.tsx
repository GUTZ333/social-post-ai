import { DeleteAccountCard, SecuritySettingsCards } from "@daveyplate/better-auth-ui";

export function AccountSettingsTab() {
  return <div className="w-full flex flex-col gap-3">
    <SecuritySettingsCards />
    <DeleteAccountCard />
  </div>
}