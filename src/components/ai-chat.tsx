"use client"

import { useAIChat } from "@/hooks/use-ai-chat"
import { Conversation, ConversationContent } from "./ai-elements/conversation"
import { Source, Sources, SourcesContent, SourcesTrigger } from "./ai-elements/sources"
import { Message, MessageContent } from "./ai-elements/message"
import { Response } from "./ai-elements/response"
import { Reasoning, ReasoningContent, ReasoningTrigger } from "./ai-elements/reasoning"
import { GlobeIcon, Loader } from "lucide-react"
import { PromptInput, PromptInputButton, PromptInputMessage, PromptInputSubmit, PromptInputTextarea, PromptInputToolbar, PromptInputTools } from "./ai-elements/prompt-input"
import { FormEvent, useState } from "react"

export function AIChat() {
  const { messages, sendMessage, status } = useAIChat();
  const [inputText, setInputText] = useState<string>("");

  function handleSubmit(message: PromptInputMessage, e: FormEvent) {
    e.preventDefault();
    sendMessage(
      {
        text: inputText
      },
    );
    setInputText("")
  }

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full h-screen border rounded-lg max-h-[500px]">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent>
            {messages.map((message) => (
              <div key={message.id}>
                {message.role === "assistant" && (
                  <Sources>
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case "source-url":
                          return (
                            <>
                              <SourcesTrigger
                                count={
                                  message.parts.filter(
                                    (part) => part.type === "source-url"
                                  ).length
                                }
                              />
                              <SourcesContent key={`${message.id}-${i}`}>
                                <Source
                                  key={`${message.id}-${i}`}
                                  href={part.url}
                                  title={part.url}
                                />
                              </SourcesContent>
                            </>
                          );
                      }
                    })}
                  </Sources>
                )}
                <Message from={message.role} key={message.id}>
                  <MessageContent>
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case "text":
                          return (
                            <Response key={`${message.id}-${i}`}>
                              {part.text}
                            </Response>
                          );
                        case "reasoning":
                          return (
                            <Reasoning
                              key={`${message.id}-${i}`}
                              className="w-full"
                              isStreaming={status === "streaming"}
                            >
                              <ReasoningTrigger />
                              <ReasoningContent>{part.text}</ReasoningContent>
                            </Reasoning>
                          );
                        default:
                          return null;
                      }
                    })}
                  </MessageContent>
                </Message>
              </div>
            ))}
            {status === "submitted" && <Loader className="animate-spin" />}
          </ConversationContent>
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-4">
          <PromptInputTextarea value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <PromptInputToolbar>
            <PromptInputTools>
              
            </PromptInputTools>
            <PromptInputSubmit disabled={!inputText} status={status}/>
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  )
}