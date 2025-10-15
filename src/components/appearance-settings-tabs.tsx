"use client"

import { useTheme } from "next-themes"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

export function AppearanceSettingsTabs() {
  const { setTheme, theme } = useTheme()

  return <div className="w-full flex flex-col gap-3">
    <div className="space-y-2">
      <RadioGroup
        onValueChange={(value) => setTheme(value)}
        defaultValue={theme}
        className="grid max-w-md grid-cols-2 gap-8"
      >
        <div>
          <RadioGroupItem value="light" id="light" className="sr-only" />
          <Label htmlFor="light" className="flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state=checked]:border-primary transition-colors">
            <div className="space-y-2 rounded-sm bg-[#f2f2f2] p-2">
              <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-2 w-[80px] rounded-lg bg-slate-200" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-200" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-200" />
                <div className="h-2 w-[40px] rounded-lg bg-slate-200" />
              </div>
            </div>
            <span className="mt-2 block w-full text-center font-normal">
              Light
            </span>
          </Label>
        </div>

        <div>
          <RadioGroupItem value="dark" id="dark" className="sr-only" />
          <Label
            htmlFor="dark"
            className="flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state=checked]:border-primary transition-colors"
          >
            {/* Pré-visualização do tema escuro */}
            <div className="space-y-2 rounded-sm bg-slate-950 p-2">
              <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
              </div>
              <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                <div className="h-4 w-4 rounded-full bg-slate-400" />
                <div className="h-2 w-[40px] rounded-lg bg-slate-400" />
              </div>
            </div>
            <span className="mt-2 block w-full text-center font-normal">
              Dark
            </span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  </div>
}