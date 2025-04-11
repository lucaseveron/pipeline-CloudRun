FROM node:19.2-alpine3.16

WORKDIR /app

COPY app.js package.json ./

RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]



