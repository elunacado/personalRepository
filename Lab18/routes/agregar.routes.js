const express = require('express');
const router = express.Router();
const agregarController = require('../controllers/agregar.controller');

router.get('/agregar', agregarController.get_obras);
router.post('/agregar', agregarController.post_obras);
router.get('/:agregar_id', agregarController.get_root);
router.get('/', agregarController.get_root);

module.exports = router;
