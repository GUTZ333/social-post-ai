import { createAuthClient } from "better-auth/client"

// configurando o Beter Auth para ser usado em client-side quando for necessário fazer alguma ação com o Better Auth por componentes que estão rodando diretamente no navegador 'client components'
const BetterAuthClient = createAuthClient({
  
})

export { BetterAuthClient }