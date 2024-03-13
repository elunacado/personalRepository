const Obras = require('../models/agregar.model');

exports.get_obras = (request, response, next) => {
    response.render('agregar'); 
};

exports.post_obras = (request, response, next) => {
    console.log(request.body);
    const obras = 
        new Obras(request.body.nombre, request.body.imagen);
    obras.save();
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('agregadas', {
        obras: Obras.fetchAll(),
    });
}