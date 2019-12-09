# RickMortyWENU
Test para empresa WENU

## Estructura
Este repo consta de una estructura tools y script, donde para el flujo de tools, estará separado por la herramienta en donde se trabajo cada proyecto, seguidamente, encontraremos las carpetas del backend y frontend.

*-backend:*
Se trata de un servicio desarrollado en node, el cual tiene multiples funcionalidades, los metodos y los datos los puedes revisar en la carpeta script

*-frontend:*
Se trata del front-end desarrollado en Vue.js. Se uso el template desde https://demos.creative-tim.com/

## Pre-requisitos
- Ultima versión de Node instalada
- npm instalado
- MongoDB corriendo en local
- nodemon instalado (https://www.npmjs.com/package/nodemon)

## Instalación
La instalación debe hacerse en la secuencia que se establece en la siguiente parte

### Back
- npm install
- npm nodemon
- server corriendo en http://localhost:3001/

### Front
- npm install
- npm run dev
- running en http://localhost:8080/

### CONTACTO
Cualquier duda pueden escribirme a leonelvelizaponte@gmail.com


### Anotaciones
- En el backend hay un archivo config.js donde tienes las variables de ambiente segun sea el caso
- El Front y el Back estan sin conexión mutua, ya que ocurrieron algunos problemas de CORS.
- El front esta funcionando parcialmente haciendo llamadas a la API de Rick y Morty y con datos estaticos
- El back cuenta con algunos metodos donde se ocupa el JWT , revisar la documentacion de script
