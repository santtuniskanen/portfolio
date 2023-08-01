FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .

RUN yarn install
RUN yarn run build
CMD ["yarn", "dev"]
EXPOSE 3000