const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantescontroller');


router.get('/agregar', (req, res) => {
    res.render('agregar'); // Renderiza la vista agregar.ejs
 });

 router.get('/carreras', (req, res) => {
    res.render('carreras'); // Renderiza la vista agregar.ejs
 });


router.get('/:id', estudiantesController.obtenerEstudiantePorId);

// Ruta para obtener todos los estudiantes
router.get('/', estudiantesController.obtenerEstudiantes);



// Ruta para obtener estudiantes inscritos
router.get('/inscritos', estudiantesController.obtenerEstudiantesInscritos);

// Ruta para obtener estudiantes con deuda
router.get('/deudas', estudiantesController.obtenerEstudiantesConDeuda);
// Ruta para crear un nuevo estudiante
router.post('/agregar', estudiantesController.crearEstudiante);

// Ruta para obtener un estudiante por su ID
router.get('/:id', estudiantesController.obtenerEstudiantePorId);

// Ruta para actualizar un estudiante por su ID
router.put('/:id', estudiantesController.actualizarEstudiante);

// Ruta para eliminar un estudiante por su ID
router.delete('/:id', estudiantesController.eliminarEstudiante);

// Ruta para obtener estudiantes por carrera
router.get('/carrera/:carrera', estudiantesController.obtenerEstudiantesPorCarrera);



module.exports = router;
