const express = require('express');
const conexion = require('./db'); // Importamos la conexión a la DB
const estudiantesRoutes = require('../gestion-estudiantes/routes/estudiantesroutes'); // Importamos las rutas

const app = express();

// Configuración del motor de plantillas ejs
app.set('view engine', 'ejs');
app.set('views', './views'); // Asegúrate de que la carpeta 'views' esté en el lugar correcto

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("../public"));
// Ruta de prueba para verificar que el servidor esté funcionando
app.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista 'index.ejs'
});

// Rutas para manejar estudiantes
app.use('/estudiantes', estudiantesRoutes);

// Levantar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
