import { createAuthClient } from "better-auth/react"
import { nextCookies } from "better-auth/next-js"

// configurando o Beter Auth para ser usado em client-side quando for necessário fazer alguma ação com o Better Auth por componentes que estão rodando diretamente no navegador 'client components'
const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL as string,
  plugins: [nextCookies()]
})

export { authClient }