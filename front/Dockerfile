FROM node:lts-alpine

RUN npm install -g http-server

RUN apk --no-cache add curl

WORKDIR /app

COPY public public
COPY package*.json ./
COPY tsconfig.json tsconfig.json
COPY vite.config.ts vite.config.ts

RUN npm install

COPY . .

CMD npm run dev