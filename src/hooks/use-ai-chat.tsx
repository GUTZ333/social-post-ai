"use client"

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export function useAIChat() {
  return useChat({
    transport: new DefaultChatTransport({
      api: "api/chat",
      credentials: "include",
    }),
  })
}