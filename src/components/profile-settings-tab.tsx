import { AccountSettingsCards } from "@daveyplate/better-auth-ui";

export function ProfileSettingsTab() {
  return <div className="w-full flex flex-col">
    <AccountSettingsCards classNames={{
      card: {
        avatar: {
          image: "h-12 w-12 object-cover",
        }
      }
    }}/>
  </div>
}