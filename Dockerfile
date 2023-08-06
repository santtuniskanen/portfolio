FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY yarn.lock /usr/src/app/
COPY package.json /usr/src/app/
RUN yarn install --frozen-lockfile && yarn cache clean

COPY . . 
RUN yarn next build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]