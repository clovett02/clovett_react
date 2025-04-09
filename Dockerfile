# Use the official Node.js image as the base image
FROM node:22.14.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g serve

COPY . .

CMD ["serve", "-s", "build"]