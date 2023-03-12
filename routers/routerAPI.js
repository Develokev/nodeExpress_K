//REQUIRE IMPORT
const express = require('express');
const router = express.Router();

const {createService, deleteService, getService, getServices, updateService} = require('../controllers/backControllers')

// const {getProducts} = require('./routerAPI');

//obtener todos los productos
router.get('/services', getServices);

//obtener un producto
router.get('/services/:id', getService);

//crear un producto
router.post('/services', createService);

//actualizar un producto
router.put('/services/:id', updateService);

//borrar un producto
router.delete('/services/:id', deleteService);

module.exports = router;