const Usuario = require('../models/usuario.model')
const { response } = require("express");
const { request } = require("http");


exports.get_login = (request, response, next) => {   
    response.render('login', {
        username: request.session.username || '',
        registrar: false, 
    });
};

exports.post_login = (request,response,next) => {
    request.session.username = request.body.username;
    response.redirect('/')
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(()=> {
        response.redirect('/users/login');
    })
}

exports.get_signup = (request, response, next) => {

    response.render('login', {
        username: request.session.username || '',
        registrar: true,

    });
}

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.username, request.body.password);
    nuevo_usuario.save()
        .then(([rows, fieldData]) => {
            response.redirect('/users/login');
        })
        .catch((error)=>{ console.log(error);});
}