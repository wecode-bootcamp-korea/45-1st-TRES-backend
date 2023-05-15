FROM node:16-alpine

WORKDIR /usr/src/app

COPY pakage*.json .

RUN npm install

COPY . .

EXPOSE 3000

cmd ["npm", "start"]