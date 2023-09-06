# Etape de développement
ARG NODE_VERSION=18.12.1
FROM node:${NODE_VERSION}-alpine AS development

WORKDIR /usr/src/app

# Copie du package.json et du package-lock.json
COPY package.json package-lock.json ./
# Installation des dépendances de développement (y compris les dépendances de production)
RUN npm install

# Copie des fichiers du projet
COPY . .

# Exposition du port
EXPOSE 3001

# Commande de démarrage pour le développement
CMD ["npm", "start"]

# Etape de construction
FROM node:16-alpine as builder

ARG REACT_APP_SERVER_URL
ENV REACT_APP_SERVER_URL=$REACT_APP_SERVER_URL

# Set the working directory to /app inside the container
WORKDIR /app

# Copie du package.json et du package-lock.json
COPY package.json package-lock.json ./

# Installation des dépendances (en utilisant npm ci)
RUN npm ci

# Copie des fichiers du projet
COPY . .

# Construction de l'application
RUN npm run build

# Etape de production
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production


# Copie des fichiers construits depuis l'étape de construction
COPY --from=builder /app/build /usr/share/nginx/html

# Copie de la configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposition du port
EXPOSE 80

# Démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]
