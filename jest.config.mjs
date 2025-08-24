import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('jest').Config} */
const config = {
  // ... outras configurações
  testEnvironment: 'node',
  transform: {
    // Usa o ts-jest para lidar com arquivos .ts e .tsx
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    // Adicione esta parte se você estiver usando aliases de caminhos como "@/db/prisma"
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;