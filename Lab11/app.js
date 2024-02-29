const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rutas = require('./routes/main.routes');
const path = require('path');

app.use('/',rutas);

app.use((req, res, next) => {
    res.status(404).sendFile(       
         path.join(__dirname, 'views', '404.html')
    );
});
  

app.listen(3000);

