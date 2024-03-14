const express = require('express');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//instalamos express-session

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}))

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/users', rutasUsuarios);

//Registrar el middleware con el módulo de agregar obras
const rutasAgregar = require('./routes/agregar.routes');
app.use('/obras', rutasAgregar);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(
    path.join(__dirname, 'views', '404.html')
  );
});

app.listen(3000);