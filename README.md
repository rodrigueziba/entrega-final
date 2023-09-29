# ENTREGA FINAL 2023

![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![EJS](https://img.shields.io/badge/EJS-3.x-yellow)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-orange)
![MySQL](https://img.shields.io/badge/MySQL-5.x-blue)


Es un proyecto que es la entrega final de un curso de Full Stack, desarrollad con Node.js, Express, EJS, Sequelize y MySQL que permite a los usuarios crear y visualizar posts


## Requisitos

- Node.js 14.x o superior
- MySQL 5.x o superior

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/mi-foro-web.git
   ```

2. Instala las dependencias:

- `npm i` - instala todas las dependencias: express cors ejs helmet morgan sequelize mysql2

3. Configura la base de datos en el archivo config.js.

- En src/config se encuentran los archivos de configuración

4. Ejecuta las migraciones para crear las tablas en la base de datos:

- `npx sequelize-cli db:migrate`

5. Inicia la aplicación:

- `npm start`

6. Abre tu navegador y accede a http://127.0.0.1:3000 




