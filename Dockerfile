FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY yarn.lock /usr/src/app/
COPY package.json /usr/src/app/

COPY . . 

RUN yarn install --production && yarn cache clean

ENTRYPOINT [ "yarn", "start" ]