# ProyectoFinal_TT_NodeJs_FedeHzm

## Contexto
Este proyecto es parte del curso TalentoTech, enfocado en el desarrollo backend con Node.js. El objetivo es construir una API RESTful siguiendo buenas prácticas y patrones modernos (Model-Service-Controller-Repository), integrando una fuente de datos externa (Firestore Database).

## Funcionalidades de la API
- Obtener todos los productos: `GET /api/products`
- Obtener un producto por ID: `GET /api/products/:id`

- Crear un producto: `POST /api/products` _(requiere autenticación)_
- Eliminar un producto: `DELETE /api/products/:id` _(requiere autenticación)_

La API gestiona productos utilizando la Fake Store API como backend externo. Las respuestas incluyen manejo de errores y códigos HTTP apropiados.

## Autenticación JWT

Para crear o eliminar productos necesitas estar autenticado. La autenticación se realiza mediante un token JWT que se obtiene usando el endpoint de login:

- **Login de usuario:**  
	`POST /auth/login`  
	Devuelve un token JWT si las credenciales son correctas.

Debes enviar el token en el header `Authorization` de tus peticiones protegidas:

```
Authorization: Bearer <tu_token>
```

Si el token no está presente o es inválido, la API responderá con un error 401 o 403.

## Estructura del proyecto
- `src/controllers/` - Lógica de control de endpoints
- `src/services/` - Lógica de negocio
- `src/repositories/` - Acceso a datos externos
- `src/models/` - Modelos de datos
- `src/routes/` - Definición de rutas
- `src/config/` - Configuracion del servidor



## Cómo correr el proyecto
1. Clona el repositorio:
	```bash
	git clone https://github.com/fhazamacardozo/ProyectoFinal_TT_NodeJs_FedeHzm.git
	cd ProyectoFinal_TT_NodeJs_FedeHzm
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Inicia el servidor en modo desarrollo:
	```bash
	npm run dev
	```
	El servidor se reiniciará automáticamente al guardar cambios.
4. Para producción, inicia el servidor normalmente:
	```bash
	npm start
	```
5. Accede a la API en `http://localhost:3000/api/products`

## Notas
- El proyecto utiliza ES Modules (`type: module` en package.json).
- La API depende de la Fake Store API, por lo que requiere conexión a internet.
