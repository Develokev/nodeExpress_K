const express = require('express');
const router = express.Router();

const { showServicesAD, createServiceAD, formulario, formUpdate, updateServiceAD } = require('../controllers/adminControllers')

//mostrar todos los servicios editables
router.get('/services/show-services', showServicesAD);

//mostrar url en donde se muestra el FORM
router.get('/services/form', formulario);

//crear un servicio
router.post('/services/create-service', createServiceAD);

//mostrar form de update
router.get('/services/update-service-form/:id', formUpdate);

//hace el update POST --consulta PUT
router.post('/services/update-service/:id', updateServiceAD);

//delete GET
router.get('/services/delete-service/:id');

module.exports = router;