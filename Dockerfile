FROM node:16-alpine

WORKDIR /usr/src/app

COPY yarn.lock /usr/src/app/
COPY package.json /usr/src/app/
COPY . /usr/src/app/

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["yarn", "dev"]