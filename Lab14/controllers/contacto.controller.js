const { log } = require('console');
const Contacto = require('../models/contacto.model');

exports.get_contacto = (req, res) => {
    res.render('contacto.ejs');
};

// Route to handle form submission
exports.post_contacto = (req, res) => {
    // Extract data from request body
    const nombre = req.body.nombre;
    const correo = req.body.email; // Note: 'email' instead of 'correo'
    const mensaje = req.body.mensaje;

    // Create a new contact instance
    const newContact = new Contacto(nombre, correo, mensaje);

    // Save the new contact
    newContact.save();

    res.setHeader('Set-Cookie', 'ultimo-contacto='+req.body.nombre)

    // Redirect to the root URL
    res.redirect('/');
};

exports.get_root = (req, res, next) => {
    console.log('Ruta /');
    let ultimoContacto = req.get('Cookie');
    if (ultimoContacto) {
        ultimoContacto = ultimoContacto.split('=')[1];
    } else {
        ultimoContacto = '';
    }
    console.log(ultimoContacto);
    res.render({ultimoContacto: ultimoContacto});
}

