import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "./ui/button";
import { HTMLAttributes } from "react";
import clsx from "clsx";
import { Badge } from "./ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { SiZod } from "react-icons/si";
import Link from "next/link";

export function ArticleWelcome({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <>
      <article className={clsx(className)} {...props}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <Badge
              variant="secondary"
              className="rounded-full py-1 border-border"
              asChild
            >
              <Link href="#">
                Master <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
              Social Post AI
            </h1>
            <p className="mt-6 md:text-lg">
              Welcome to Social Post Ai, an Artificial Intelligence that generates content and posts for social media profiles, focused on people who want to succeed in social networks in their content production jobs.
            </p>
            <div className="mt-12 flex items-center justify-center gap-4">
              <Button size="lg" className="rounded-full text-base">
                <Link href="/sign-up">
                  Get Started
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none"
              >
                <CirclePlay className="size-5" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export async function ArticleFeatures({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <>
      <article className={clsx(className)} {...props}>
        <h1 className="text-center text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
          Features
        </h1>
        <div className="mt-10 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:bg-gradient-to-t grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:shadow-xs lg:px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <Card key={index} data-slot="card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  Zod <ArrowUpRight className="ml-1 size-4" />
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