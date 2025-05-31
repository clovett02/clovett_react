# Use the official Node.js image as the base image
FROM node:24-slim

WORKDIR /app

COPY package*.json .
RUN npm install
RUN npm install -g serve

COPY . .
RUN npm run build

CMD ["serve", "-s", "dist", "-l", "3000", "--ssl-cert", "/etc/letsencrypt/live/clovett.me/fullchain.pem", \
"--ssl-key", "/etc/letsencrypt/live/clovett.me/privkey.pem"]