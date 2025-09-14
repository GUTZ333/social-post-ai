import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Section from "@/components/section";
import clsx from "clsx";

export default function LandingPage() {
  return <main className="p-2">
    <Navbar />
    <Section className={clsx("w-full min-h-screen flex flex-col items-center p-2")} />
    <Footer />
  </main>;
}
