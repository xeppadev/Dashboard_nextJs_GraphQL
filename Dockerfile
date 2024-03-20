# Usa la imagen oficial de Node.js como base
FROM node:20

# Establece la zona horaria en Lima, Perú
ENV TZ=America/Lima

# Define los argumentos de construcción y las variables de entorno
ARG NEXT_PUBLIC_GRAPHQL_URL
ARG NEXT_API_URL
ARG NEXTAUTH_URL
ARG NEXTAUTH_SECRET

ENV NEXT_PUBLIC_GRAPHQL_URL=$NEXT_PUBLIC_GRAPHQL_URL
ENV NEXT_API_URL=$NEXT_API_URL
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json a /usr/src/app
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto 4501 en el contenedor
EXPOSE 4501

# Construye la aplicación y luego la inicia
CMD ["npm", "run", "start"]