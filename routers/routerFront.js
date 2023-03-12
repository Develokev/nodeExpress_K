const express = require('express');
const router = express.Router();

const {getIndex, getServices, getProducts, getContacts, getFacilities}=require('../controllers/frontControllers');


//RUTAS
//Home
router.get('/', getIndex);

//Servicios
router.get('/servicios', getServices);

//Facilities
router.get('/facility', getFacilities)

//Productos
router.get('/productos', getProducts);

//Contactos
router.get('/contactos', getContacts);

//exportando
module.exports=router;