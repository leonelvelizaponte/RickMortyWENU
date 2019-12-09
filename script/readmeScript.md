# Postman

Cuando importes estas llamadas, tienes ref-* y back-*

Donde ref hace llamadas a la API de Rick y Morty, mientras que los back hacen llamadas al backend (este debe estar arriba)

Las llamadas
- back-agregarFavorito
- back-removerFavorito

Tienen una validacion JWT asi que es necesario tener el token para realizar la llamada. 
Para esto se debe usar la llamada back-signup con un correo y una contraseña, luego usar back-login con los mismos datos.
Y la respuesta de este ultimo trae el token que debemos usar.

- back-personajes: trae la lista 1 de los personajes
- back-pagina: trae la lista de los personajes dependiendo la paginacion
- back-squanch: trae todos los personajes favoritos de la base de datos
- back-agregarFavorito: agrega a la base de datos un personaje favorito
- back-removerFavorito: elimina de la base de datos un personaje
- back-signup: registra un nuevo usuario
- back-login: llama a la base de datos y trae el token de acceso
