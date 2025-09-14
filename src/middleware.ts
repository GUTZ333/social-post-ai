import { MiddlewareConfig, NextRequest, NextResponse as response } from "next/server";
import { routesPublic } from "./lib/routes-public";
import { getSessionCookie } from "better-auth/cookies"

export function middleware(request: NextRequest) {
  const pathUri = request.nextUrl.pathname;
  const isPublicRoute = routesPublic.find(route => route.path === pathUri);
  const authToken = getSessionCookie(request)

  if (isPublicRoute && isPublicRoute.whenAuthenticated === "redirect" && authToken) {
    const URI = request.nextUrl.clone();
    URI.pathname = "/dashboard";
    return response.redirect(URI);
  }

  else if ((isPublicRoute && !authToken) || (authToken && !isPublicRoute)) {
    return response.next();
  }
  
  else if (!authToken && !isPublicRoute) {
    const URI = request.nextUrl.clone();
    URI.pathname = "/sign-in";
    return response.redirect(URI);
  }

  return response.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api/trpc|api|_next/static|_next/image|.*\\.png$).*)"
  ]
};