FROM node:16-alpine

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn install

COPY . . 
EXPOSE 3000

CMD yarn dev