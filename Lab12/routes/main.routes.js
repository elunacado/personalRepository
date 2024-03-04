const  express = require("express");
const router = express.Router();


router.get('/',(req, res, next) =>{
    res.render('home.ejs');
    next();
})

router.get('/aboutUs',(req, res, next) => {
    res.render('aboutus.ejs')
    next();
    
});

router.get('/sabores',(req,res,next) => {
    res.render('sabores.ejs')
    next();
})

// GET 
router.get('/contacto', (req, res) => {
    res.render('contacto.ejs');
});

// POST 
router.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    res.render('mensaje-enviado.ejs', { nombre, email, mensaje });
});

router.get('/resenas', (req, res) => {
    res.render('resenas.ejs');
});

module.exports = router;

