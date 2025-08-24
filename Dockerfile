# Definir a imagem do Node JS com a versão desejada
FROM node:20-alpine

# Definir diretório de trabalho do container do Node
WORKDIR /app

# copiar os arquivos de configuração do projeto
COPY package*.json pnpm-lock.yml ./

# Instalar as dependências do projeto
RUN pnpm i --prod

# copiar o restante do código
COPY . .

EXPOSE 3000

CMD [ "pnpm", "dev" ]