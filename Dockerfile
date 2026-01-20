FROM node:22-alpine AS builder
WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
COPY --from=builder /src/dist ./dist
COPY app.js ./

RUN npm install --production

EXPOSE 80
CMD ["node", "app.js"]
