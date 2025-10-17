import { Loader2 } from "lucide-react";
import "@/app/globals.css"

export default function loading() {
  return <div className="w-full min-h-screen flex items-center justify-center">
    <Loader2 size={50} className="animate-spin"/>
  </div>
}