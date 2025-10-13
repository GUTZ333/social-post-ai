import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb"
    }
  },
  // configuração de imagens no Next JS
  images: {
    // domínio externo permitido para ser usado em links de imagem salvas em server web
    domains: ["yellow-acceptable-tarsier-228.mypinata.cloud"]
  }
};

export default nextConfig;
