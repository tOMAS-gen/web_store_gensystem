# Usa la imagen oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de Node.js, incluyendo nodemon
RUN npm install

# Instala nodemon globalmente (opcional si lo quieres usar globalmente)
RUN npm install -g nodemon

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto en el que tu aplicación se ejecutará
EXPOSE 3000

# Usa nodemon para iniciar la aplicación
CMD ["nodemon", "src/index.js"]
