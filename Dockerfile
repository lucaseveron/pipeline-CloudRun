# Imagen base liviana
FROM node:19.2-alpine3.16

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos necesarios
COPY app.js package.json ./

# Instalar dependencias
RUN npm install

# Expone el puerto requerido por Cloud Run
EXPOSE 8080

# Comando para iniciar la app
CMD ["node", "app.js"]
