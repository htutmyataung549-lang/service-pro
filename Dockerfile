FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm config set fetch-retry-maxtimeout 600000 \
    && npm install

COPY . .

RUN npm run build

# --- Stage 2: Nginx ---
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]