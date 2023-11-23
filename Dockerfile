FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]