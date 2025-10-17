// src/app/api/trpc/[trpc]/route.ts (Seu tRPC Handler)
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from "@/routers/app-router";
import { typeAppRouter } from '@/routers/app-router';
import { NextRequest } from 'next/server';

// Função para encapsular o handler
const handler = (req: NextRequest) => fetchRequestHandler<typeAppRouter>({
  endpoint: '/api/trpc',
  req,
  router: appRouter,
  createContext: () => ({}),
});

export { handler as GET, handler as POST };

// Nota: Você pode precisar ajustar o tipo 'AppRouter'
// ou usar o 'typeAppRouter' que você exporta de app-router.ts