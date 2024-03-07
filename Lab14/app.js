const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rutas = require('./routes/main.routes');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view-engine','ejs');
app.set('views', 'views')

app.use('/',rutas);
app.use(express.static(path.join(__dirname, 'views','404.html')))


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
  

app.listen(3000);

