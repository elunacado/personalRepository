const Obras = require('../models/agregar.model');

exports.get_obras = (request, response, next) => {
    response.render('agregar', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    }); 

};

exports.post_obras = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const obras = 
    new Obras(request.body.nombre, request.file.filename);
    
    obras.save(request.session.username)
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie',
                'ultima-obra=' + request.body.nombre + '; HttpOnly');
            response.redirect('/agregadas');
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

    Obras.fetch(request.params.agregadas_id).then(([rows,fieldData]) => {
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

exports.get_buscar = (request, response, next) => {
    Obras.search(request.params.valor_busqueda)
        .then(([obras, fieldData]) => {
            return response.status(200).json(obras.obras)
        })
        .catch((error) => {console.log(error)});
};