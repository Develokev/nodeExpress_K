const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {validateJWT} = require('../middlewares/validateJWT');


const { getUsers, getUser, updateUser, deleteUser, registerUser, renewToken, loginUser } = require('../controllers/backControlUsers');
const {validateInputs} = require('../middlewares/validateInputs');

//Get Usuarios
router.get('/', getUsers);

//Get Usuario SINGLE
router.get('/:id', getUser);

//!Post Usuario REGISTER - CREATE
router.post('/register', registerUser);

//!Post LOGIN USER
router.post('/', loginUser, validateJWT);

//!Get RENEW
router.get('/renew', validateJWT, renewToken)

//Put Usuario
router.put('/:id', updateUser);

//Delete User DELETE
router.delete('/:id', deleteUser);

module.exports = router;