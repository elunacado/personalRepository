const Contacto = require('../models/contacto.model');



// Route to handle form submission
exports.post_contacto = (req, res) => {
    // Extract data from request body
    const nombre = req.body.nombre;
    const correo = req.body.email; // Note: 'email' instead of 'correo'
    const mensaje = req.body.mensaje;
    console.log(req.body);
    // Create a new contact
    const contacto = new Contacto(nombre, correo, mensaje);
    contacto.save();
    

    res.setHeader('Set-Cookie', 'ultimoContacto=' + req.body.nombre );
    res.redirect('/');
};
exports.get_contacto = (req, res) => {
    console.log('Ruta /');
    let ultimoContacto = req.get('Cookie');
    
    if (ultimoContacto){
            ultimoContacto = ultimoContacto.split('=')[1];
    } else {
            ultimoContacto = ''
    }
    res.render('contacto.ejs', {
        contacto: Contacto.fetchAll(),
        cookie: ultimoContacto
    });
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
        cookie: ultimoContacto
    })
}