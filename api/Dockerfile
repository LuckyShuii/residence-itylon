FROM node:20-alpine

WORKDIR /app

RUN apk --no-cache add curl

COPY package*.json ./
RUN npm install -g npm
RUN npm install

COPY tsconfig.json tsconfig.json
COPY src src

CMD npm start