ARG NODE_VERSION=23.9.0

FROM node:${NODE_VERSION}

WORKDIR /USR/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]