import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "@/images/social-post-icon.webp";
import { HTMLAttributes } from "react";
import clsx from "clsx";
import { Badge } from "./ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { SiReacthookform, SiZod } from "react-icons/si";
import Link from "next/link";

export function ArticleWelcome({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <>
      <article className={clsx(className)} {...props}>
        <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
          <div>
            <Badge>
              Post Master
            </Badge>
            <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
              Social Post AI
            </h1>
            <p className="mt-6 max-w-[60ch] sm:text-lg">
              Welcome to Social Post Ai, an Artificial Intelligence that generates content and posts for social media profiles, focused on people who want to succeed in social networks in their content production jobs.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <Button size="lg" className="text-base shadow-none">
                <Link href="/sign-up" className="flex items-center">
                  Get Started <ArrowUpRight className="!h-5 !w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base shadow-none"
              >
                <CirclePlay className="!h-5 !w-5" /> Watch Demo
              </Button>
            </div>
          </div>
          <Image src={Logo} alt="Social Post AI" className="w-full aspect-video bg-accent object-contain rounded-xl" />
        </div>
      </article>
    </>
  );
}

export async function ArticleFeatures({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <>
      <article className={clsx(className)} {...props}>
        <h1 className="mt-6 text-center text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
          Features
        </h1>
        <div className="mt-10 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:bg-gradient-to-t grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:shadow-xs lg:px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} data-slot="card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Zod
                </CardTitle>
                <CardAction>
                  <SiZod size={22} />
                </CardAction>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Zod is a TypeScript-first schema declaration and validation library. It allows you to define your data structures and validate them at runtime, ensuring type safety and reducing runtime errors.
                </CardDescription>
              </CardContent>
            </Card>
          ))}

        </div>
      </article>
    </>
  )
}