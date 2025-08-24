# multi-stage Dockerfile for Create React App
# Build stage
FROM node:17.9.1-alpine AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# copy package manifests first for better caching
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# copy rest of sources and build
COPY . .
RUN npm run build

# Production stage: serve with nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
