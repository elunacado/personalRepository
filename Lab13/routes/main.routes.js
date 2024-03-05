const  express = require("express");
const router = express.Router();
const mainHandler = require('../controllers/main.controller');
const aboutUsHandler = require('../controllers/aboutUs.controller')
const saboresHandler = require('../controllers/sabores.controller')
const resenasHandler = require('../controllers/resenas.controller')

router.get('/', mainHandler.get_main);
router.get('/aboutUs',aboutUsHandler.get_aboutUs);
router.get('/sabores',saboresHandler.get_sabores)
router.get('/resenas', resenasHandler.get_resenas);


// GET 
router.get('/contacto', (req, res) => {
    res.render('contacto.ejs');
});

// POST 
router.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    res.render('mensaje-enviado.ejs', { nombre, email, mensaje });
});


module.exports = router;

