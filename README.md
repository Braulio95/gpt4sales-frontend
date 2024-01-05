## Bienvenido a la interfaz de usuario 
![Home con 3 registros](https://tinypic.host/image/6qibf)

## Getting started 
Clona el proyecto

```bash
git clone
```

A continuación arranca el proyecto con el comando:
```bash
npm run dev
```

**Nota: asegurate de estar corriendo el servidor al mismo tiempo que la interfaz de usuario**
## Navegando en la interfaz

Lo primero que vas a ver es el Homepage vacio ya que aún no tienes registros de libros. El primer paso es ir al dashboard, el cual primero te va a solicitar iniciar sesión. Si ya hiciste todos los pasos de las instrucciones del backend deberías tener tu usuario creado. Inicia sesión con tu **correo y contraseña**

Si el inicio de sesión es correcto serás redirigido al dashboard que es una tabla donde podras editar tus registros de libros.

Para crear registros te dirigirás al botón verde para crear un libro. Puedes ingresar la siguiente información

Nombre:  Return of the King
Autor: JRR Tolkien
ISBN: 9780618002245
Sipnosis: Tercera parte de el señor de los anillos
Portada o cover: https://m.media-amazon.com/images/I/71tDovoHA+L._AC_UF894,1000_QL80_.jpg

Con esta información puedes agregar los libros que desees. Al agregarlos la tabla se debería actualizar:
![Registro exitoso](https://tinypic.host/image/6qRPM)

De la misma forma podrias ver el nuevo registro en el HomePage
![Registro exitoso en el home](https://tinypic.host/image/6qjMk)

## Nota
Es posible que el navegador por el uso de localStorage no actualice las vistas con el cambio de registro. Esto se soluciona activando y desactivando el Caché en las herramientas de desarrollo
