import { Loader2 } from "lucide-react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Section() {
  return (
    <section className="relative z-10 w-full min-h-[calc(100vh-64px)] py-10 flex flex-col justify-center gap-3 overflow-hidden">
      <h2 className="text-4xl font-bold mx-auto">Social Post Ai</h2>
      <p className="text-lg font-normal max-w-2xl mx-auto text-center">Hello, welcome to Social Post Ai, an artificial intelligence of content generation for posts on social networks focused on people with the purpose of performing posts in a professional way and that attracts the public.</p>
      <Button className="max-w-60 mx-auto"><Link href="/sign-up">get started</Link></Button>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardAction><Loader2 className="animate-spin size-4" /></CardAction>
          </CardHeader>
          <CardContent>
            <CardTitle>This is the content of the card.</CardTitle>
            <CardDescription>This is the description of the card.</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Footer description</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardAction><Loader2 className="animate-spin size-4" /></CardAction>
          </CardHeader>
          <CardContent>
            <CardTitle>This is the content of the card.</CardTitle>
            <CardDescription>This is the description of the card.</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Footer description</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardAction><Loader2 className="animate-spin size-4" /></CardAction>
          </CardHeader>
          <CardContent>
            <CardTitle>This is the content of the card.</CardTitle>
            <CardDescription>This is the description of the card.</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Footer description</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardAction><Loader2 className="animate-spin size-4" /></CardAction>
          </CardHeader>
          <CardContent>
            <CardTitle>This is the content of the card.</CardTitle>
            <CardDescription>This is the description of the card.</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>Footer description</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
