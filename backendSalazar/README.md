# centro-medico-back

Aplicación que simula la pequeña gestion de citas por parte del usuario de un centro médico.
Utiliza el framework de php Symfony para el backend por lo tanto habra que instalarlo para su funcionamiento.
También necesitaras el composer para algunos repositorios de symfony.

Symfony: https://symfony.com/download
Composer: https://getcomposer.org/download/

<h1>Instalación</h1>

Accedemos a la carpeta del proyecto

cd api-centro

y ejecutas el comando composer install. Tras ello inicias el servidor con symfony server:start.
El SQL se encuentra en la propia carpeta del proyecto. (centro.sql) contiene datos ya incluidos con especialidades medicas, datos de usuarios y algunas citas para el usuario
<strong>ccc@gmail.com<strong> con contraseña <strong>1234<strong>.

El backend sigue la misma filosofia para todos sus controladores

En el caso de las citas:

<h1>GET</h1>
Obtiene las citas de un usuario
/citas
<h1>POST</h1>
Crea una cita para el usuario logueado actualmente
/citas
<h1>DELETE</h1>
Borra una cita
/citas/id

En el caso de los usuarios, puedes editar tu propio usuario.
<h1>PUT</h1>
/usuarios	Modifica los datos del usuario con el que estás logueado



