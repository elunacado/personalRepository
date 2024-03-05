const  express = require("express");
const router = express.Router();
const mainHandler = require('../controllers/main.controller');
const aboutUsHandler = require('../controllers/aboutUs.controller')
const saboresHandler = require('../controllers/sabores.controller')
const resenasHandler = require('../controllers/resenas.controller')
const contactoHandler = require('../controllers/contacto.controller')

//GET
router.get('/', mainHandler.get_main);
router.get('/aboutUs',aboutUsHandler.get_aboutUs);
router.get('/sabores',saboresHandler.get_sabores);
router.get('/resenas', resenasHandler.get_resenas);
router.get('/contacto',contactoHandler.get_contacto); 
// POST 
router.post('/contacto', contactoHandler.post_contacto);


module.exports = router;

