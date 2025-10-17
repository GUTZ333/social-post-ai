"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Mail, BookOpen, MessageCircle, Shield } from "lucide-react"

export default function GetHelpPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-10">
      {/* Intro */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold">🆘 Get Help — Social Post AI</h1>
        <p className="text-muted-foreground text-lg">
          Everything you need to get the most out of Social Post AI — your AI assistant for smarter social media.
        </p>
      </section>

      {/* How it works */}
      <Card>
        <CardHeader>
          <CardTitle>🚀 How to Use Social Post AI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Sign up or log in</strong> to your account.</li>
            <li><strong>Describe your idea</strong> or goal for the post.</li>
            <li><strong>Choose the tone and style</strong> that fits your audience.</li>
            <li><strong>Generate content with AI</strong> in seconds.</li>
            <li><strong>Edit, copy, or publish</strong> directly to your social platforms.</li>
          </ol>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle>💡 Tips to Get Better Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Be clear and specific in your prompt for more relevant results.</li>
            <li>Use keywords that match your target audience and niche.</li>
            <li>Save your favorite post templates to reuse later.</li>
          </ul>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>❓ Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is the generated content unique?</AccordionTrigger>
              <AccordionContent>
                Yes. Each post is created uniquely by the AI based on your input.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can I edit the generated posts?</AccordionTrigger>
              <AccordionContent>
                Absolutely! You can fully edit and customize your content before publishing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is Social Post AI free?</AccordionTrigger>
              <AccordionContent>
                We offer a free plan with basic usage limits and premium plans with more features.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Which platforms are supported?</AccordionTrigger>
              <AccordionContent>
                You can integrate with Instagram, LinkedIn, X (Twitter), and Facebook — more coming soon!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Support section */}
      <Card>
        <CardHeader>
          <CardTitle>📩 Need More Help?</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="mailto:support@socialpost.ai">
              <Mail className="w-4 h-4" /> Contact Support
            </a>
          </Button>

          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="#">
              <BookOpen className="w-4 h-4" /> View Documentation
            </a>
          </Button>

          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="#">
              <MessageCircle className="w-4 h-4" /> Chat with Us
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Privacy / Security */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
        <Shield className="w-4 h-4" />
        Your data is protected. <a href="#" className="underline ml-1">Privacy Policy</a>
      </div>
    </div>
  )
}
