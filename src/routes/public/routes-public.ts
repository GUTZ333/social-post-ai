export const routesPublic = [
  {
    path: "/",
    whenAuthenticated: "next"
  },
  {
    path: "/sign-up",
    whenAuthenticated: "redirect"
  },
  {
    path: "/sign-in",
    whenAuthenticated: "redirect"
  },
  {
    path: "/forgot-password",
    whenAuthenticated: "redirect"
  },
  {
    path: "/set-password",
    whenAuthenticated: "redirect"
  },
  {
    path: "/about",
    whenAuthenticated: "next"
  },
] as const;