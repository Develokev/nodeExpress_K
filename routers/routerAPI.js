//REQUIRE IMPORT
const express = require('express');
const {check} = require('express-validator')
const router = express.Router();

const {createService, deleteService, getService, getServices, updateService} = require('../controllers/backControllers')
const {validateInputs} = require('../middlewares/validateInputs')
// const {getProducts} = require('./routerAPI');

//obtener todos los productos
router.get('/services', getServices);

//obtener un producto
router.get('/services/:id', getService);

//crear un producto
router.post('/services', [

    check('service','el servicio es obligatorio').not().isEmpty(),
    check('description','la descripción es obligatoria').not().isEmpty(),
    validateInputs
],
createService);

//actualizar un producto
router.put('/services/:id', updateService);

//borrar un producto
router.delete('/services/:id', deleteService);

module.exports = router;