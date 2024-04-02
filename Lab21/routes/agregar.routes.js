const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth')
const agregarController = require('../controllers/agregar.controller');

router.get('/agregar', isAuth, agregarController.get_obras);
router.post('/agregar', isAuth,agregarController.post_obras);
router.get('/:agregadas_id', isAuth,agregarController.get_root);
router.get('/', isAuth,agregarController.get_root);

module.exports = router;
