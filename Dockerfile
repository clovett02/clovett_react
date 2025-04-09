# Use the official Node.js image as the base image
FROM node:22.14.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "build"]