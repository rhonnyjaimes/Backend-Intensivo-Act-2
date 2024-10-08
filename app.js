const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const estudiantesRoutes = require('./routes/estudiantesroutes'); // Ajusta la ruta si es necesario

// Configuración del motor de plantillas ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Asegúrate de que la carpeta 'views' esté en el lugar correcto
app.use(methodOverride('_method'));

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/estudiantes', estudiantesRoutes);

// Levantar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
