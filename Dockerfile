FROM node:16-alpine as build

WORKDIR /app

COPY src src
COPY static static
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY svelte.config.js svelte.config.js
COPY tsconfig.json tsconfig.json

RUN npm ci && npm run build

FROM nginx:1.21-alpine

COPY --from=build /app/build /usr/share/nginx/html
