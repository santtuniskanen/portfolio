FROM node:20-alpine3.17
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
CMD ["yarn", "dev"]
EXPOSE 3000