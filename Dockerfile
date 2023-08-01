FROM node:16-alpine
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
CMD ["yarn", "dev"]
EXPOSE 3000