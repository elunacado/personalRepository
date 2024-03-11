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
    console.log(req.body.nombre);
    // Create a new contact
    const nuevoContacto = new Contacto(nombre, correo, mensaje);
    // Save the new contact
    nuevoContacto.save();

    res.setHeader('Set-Cookie', 'ultimoContacto=' + req.body.nombre)


};

exports.get_root = (req, res, next) => {
    console.log('Ruta /');
    let ultimoContacto = req.get('Cookie');
    
    if (ultimoContacto){
            ultimoContacto = ultimoContacto.split('=')[1];
    } else {
            ultimoContacto = ''
    }
    console.log(ultimoContacto);
    res.render('contacto', {
        contacto: Contacto.fetchAll(),
        ultimoContacto: ultimoContacto
    })
}