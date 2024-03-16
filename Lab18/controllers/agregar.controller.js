const Obras = require('../models/agregar.model');

exports.get_obras = (request, response, next) => {
    response.render('agregar', {
        username: request.session.username || '',
    }); 

};

exports.post_obras = (request, response, next) => {
    console.log(request.body);
    const obras = 
    new Obras(request.body.nombre, request.body.imagen);
    
    obras.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie',
                'ultima-obra=' + request.body.nombre + '; HttpOnly');
            response.redirect('/');
    })
    .catch((error) => {console.log(error);})
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultima_obra = request.get('Cookie')
    if (ultima_obra) {
        ultima_obra = ultima_obra.split('=')[1];
    } else {
        ultima_obra = ''
    }
    console.log(ultima_obra);

    Obras.fetch(request.params.obras_id).then(([rows,fieldData]) => {
        console.log(rows);
        response.render('agregadas', {
            obras: rows,
            ultima_obra: ultima_obra,
            username: request.session.username || '',
        });
    })
    .catch((error) => {
        console.log(error );
    });
   
}