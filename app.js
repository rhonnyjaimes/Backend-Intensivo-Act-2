const express = require('express');
const conexion = require('./db'); // Importamos la conexión a la DB
const estudiantesRoutes = require('../gestion-estudiantes/routes/estudiantesroutes'); // Importamos las rutas

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba para verificar que el servidor esté funcionando
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Rutas para manejar estudiantes
app.use('/estudiantes', estudiantesRoutes);

// Levantar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

