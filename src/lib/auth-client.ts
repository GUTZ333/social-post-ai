import { envs } from "@/schemas/envs-schema"
import { createAuthClient } from "better-auth/client"
import { nextCookies } from "better-auth/next-js"

// configurando o Beter Auth para ser usado em client-side quando for necessário fazer alguma ação com o Better Auth por componentes que estão rodando diretamente no navegador 'client components'
const authClient = createAuthClient({
  baseURL: envs.BETTER_AUTH_URL,
  plugins: [nextCookies()]
})

export { authClient }