FROM node:lts-alpine as frontend

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
WORKDIR /sites
COPY --from=frontend /app/build .
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]