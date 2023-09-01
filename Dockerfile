# Use a imagem Node.js
FROM node:18.17.1

# Crie o diretório de trabalho
WORKDIR /usr/src/app

# Instale as dependências do aplicativo
COPY package*.json ./

RUN yarn

# Copie os arquivos do código-fonte do aplicativo
COPY . .

# Execute o comando 'yarn build' para gerar a pasta 'dist'
RUN yarn build

# Exponha a porta 3000 (se necessário)
EXPOSE 8080

# Altere o diretório de trabalho para 'dist'
WORKDIR /usr/src/app/dist

# Execute o aplicativo a partir da pasta 'dist'
CMD [ "yarn", "start" ]
