import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from '../routers/app-router';

const server = createHTTPServer({
  router: appRouter
});

server.listen(3000);