const Estudiante = require('../models/estudiante');
const conexion = require('../db');

exports.obtenerEstudiantes = (req, res) => {
    Estudiante.obtenerTodos(conexion)
        .then(estudiantes => {
            res.render('index', { estudiantes }); // Renderiza la vista 'index.ejs' pasando los estudiantes
        })
        .catch(err => {
            console.error('Error al obtener estudiantes:', err);
            res.status(500).json({ error: err.message });
        });
};



exports.obtenerEstudiantePorId = (req, res) => {
    const { id } = req.params;
    Estudiante.obtenerPorId(conexion, id)
        .then(estudiante => {
            if (!estudiante) return res.status(404).json({ error: 'Estudiante no encontrado' });
            res.json(estudiante);
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.crearEstudiante = (req, res) => {
    const nuevoEstudiante = req.body;
    Estudiante.crear(conexion, nuevoEstudiante)
        .then(id => res.status(201).json({ id }))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.actualizarEstudiante = (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    Estudiante.actualizar(conexion, id, datosActualizados)
        .then(affectedRows => {
            if (affectedRows === 0) return res.status(404).json({ error: 'Estudiante no encontrado' });
            res.json({ message: 'Estudiante actualizado' });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.eliminarEstudiante = (req, res) => {
    const { id } = req.params;
    Estudiante.eliminar(conexion, id)
        .then(affectedRows => {
            if (affectedRows === 0) return res.status(404).json({ error: 'Estudiante no encontrado' });
            res.json({ message: 'Estudiante eliminado' });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.obtenerEstudiantesPorCarrera = (req, res) => {
    const { carrera } = req.params;
    Estudiante.obtenerPorCarrera(conexion, carrera)
        .then(estudiantes => res.json(estudiantes))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.obtenerEstudiantesInscritos = (req, res) => {
    Estudiante.obtenerInscritos(conexion)
        .then(estudiantes => res.json(estudiantes))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.obtenerEstudiantesConDeuda = (req, res) => {
    Estudiante.obtenerConDeuda(conexion)
        .then(estudiantes => res.json(estudiantes))
        .catch(err => res.status(500).json({ error: err.message }));
};
