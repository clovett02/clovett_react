# Use the official Node.js image as the base image
FROM node:22.14.0

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g serve

RUN npm run build

CMD ["serve", "-s", "dist", "-l", "3000", "--ssl-cert", "/etc/letsencrypt/live/clovett.me/fullchain.pem", \
"--ssl-key", "/etc/letsencrypt/live/clovett.me/privkey.pem"]