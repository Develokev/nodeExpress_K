//REQUIRE IMPORT
const express = require('express');
const {check} = require('express-validator');
const router = express.Router();

const {createService, deleteService, getService, getServices, updateService} = require('../controllers/backControllers')
const {validateInputs} = require('../middlewares/validateInputs');

//obtener todos los productos
router.get('/', getServices);

//obtener un producto
router.get('/:id', getService);

//crear un producto
router.post('/', [

    check('service','el servicio es obligatorio').not().isEmpty(),
    check('description','la descripción es obligatoria').not().isEmpty(),
    validateInputs
],
createService);

//actualizar un producto
router.put('/:id', [

    check('service','el servicio es obligatorio').not().isEmpty(),
    check('description','la descripción es obligatoria').not().isEmpty(),
    validateInputs

], updateService);

//borrar un producto
router.delete('/:id', deleteService);

module.exports = router;