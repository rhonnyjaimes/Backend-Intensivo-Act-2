# Backend-Intensivo-Act-2
GESTION ESTUDIANTIL

Este proyecto es una aplicación web desarrollada con Node.js y Express que permite gestionar estudiantes en una base de datos MySQL. La aplicación ofrece funciones CRUD (Crear, Leer, Actualizar, Eliminar) y cuenta con vistas renderizadas en EJS para interactuar con los datos. También incluye características adicionales como la búsqueda de estudiantes por carrera, la visualización de estudiantes inscritos, y la gestión de estudiantes con deudas.

## Características

- **Gestión de Estudiantes:** Crear, ver, actualizar y eliminar registros de estudiantes.
- **Búsqueda por Carrera:** Permite buscar estudiantes en una carrera específica.
- **Estudiantes Inscritos:** Muestra a los estudiantes que están inscritos.
- **Gestión de Deudas:** Visualiza a los estudiantes con deudas y resalta el monto adeudado.
- **Interfaz de Usuario:** La aplicación tiene una interfaz básica pero funcional, con botones para realizar acciones específicas y un diseño simple.

## Tecnologías Utilizadas

- **Node.js**
- **Express**
- **EJS**
- **MySQL**
- **CSS** para el diseño básico

## Estructura del Proyecto

- `/routes`: Contiene las rutas para las operaciones CRUD y otras funcionalidades.
- `/controllers`: Implementa la lógica de los controladores, incluyendo promesas y manejo de clases.
- `/views`: Contiene las vistas EJS utilizadas para renderizar las páginas.
- `/models`: Incluye el modelo de estudiante con los métodos estáticos para interactuar con la base de datos.
- `/public`: Archivos estáticos como imágenes y CSS.

## Requisitos Previos

- Node.js v14 o superior
- MySQL
- npm
- XAMPP

## Instalación

### Paso 1: Clonar el Repositorio

git clone https://github.com/rhonnyjaimes/Backend-Intensivo-Act-2.git
cd Backend-Intensivo-Act-2

### Paso 2: Instalar Dependencias

npm install

### Paso 3: Configurar la Base de Datos

Crea una base de datos MySQL usando XAMPP llamada gestion_estudiantes.
Importa el archivo SQL proporcionado en gestion_estudiantes.sql para crear las tablas y registros iniciales.

### Paso 4: Configurar las Variables de Entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido o configura el archivo db.js dependiendo de tu configuracion de root:

DB_HOST=localhost
DB_USER="tu_usuario"
DB_PASSWORD="tu_contraseña"
DB_NAME="gestion_estudiantes"
PORT=3000

## Paso 5: Ejecutar la Aplicación

npm start

La aplicación estará disponible en http://localhost:3000.

Todos los derechos reservados © 2024 Rhonny Andres Jaimes Gonzalez C.I. V-29.718.095.


