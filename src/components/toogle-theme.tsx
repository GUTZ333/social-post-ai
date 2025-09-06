"use client"

import { Moon, Sun } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { setTheme } = useTheme();
  return (
    <>
      <Select onValueChange={(value) => setTheme(value)}>
        <SelectTrigger>
          <SelectValue placeholder="select theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Themes</SelectLabel>
              <SelectItem value="light">Light <Sun /></SelectItem>
              <SelectItem value="dark">Dark <Moon /></SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectContent>
      </Select>
    </>
  )
}