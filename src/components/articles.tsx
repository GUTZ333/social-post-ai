import { ArrowUpRight, CirclePlay, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "@/images/social-post-icon.webp"
import { HTMLAttributes } from "react";
import clsx from "clsx";
import { Badge } from "./ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export function ArticleWelcome({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <>
      <article className={clsx(className)} {...props}>
        <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
          <div>
            <Badge>
              Post Master
            </Badge>
            <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
              Social Post AI
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg">
              Welcome to Social Post Ai, an Artificial Intelligence that generates content and posts for social media profiles, focused on people who want to succeed in social networks in their content production jobs.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <Button size="lg" className="text-base shadow-none">
                Get Started <ArrowUpRight className="!h-5 !w-5" />
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

export function ArticleFeatures({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <>
      <article className={clsx(className)} {...props}>
        <h1 className="mt-6 text-center text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
          Features
        </h1>
        <div className="mt-10 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:bg-gradient-to-t grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:shadow-xs lg:px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Loader2 className="animate-spin h-5 w-5" /> Fast Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generate social media posts in seconds using AI technology.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="link" className="px-0">
                  Learn More <ArrowUpRight className="!h-4 !w-4" />
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Loader2 className="animate-spin h-5 w-5" /> Fast Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generate social media posts in seconds using AI technology.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="link" className="px-0">
                  Learn More <ArrowUpRight className="!h-4 !w-4" />
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Loader2 className="animate-spin h-5 w-5" /> Fast Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generate social media posts in seconds using AI technology.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="link" className="px-0">
                  Learn More <ArrowUpRight className="!h-4 !w-4" />
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Loader2 className="animate-spin h-5 w-5" /> Fast Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generate social media posts in seconds using AI technology.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="link" className="px-0">
                  Learn More <ArrowUpRight className="!h-4 !w-4" />
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
        </div>
      </article>
    </>
  )
}