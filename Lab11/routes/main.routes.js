const  express = require("express");
const router = express.Router();

router.get('/',(req, res, next) =>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Saying Hi</title>
    </head>
    <body>
        <h1>Hi</h1>
    </body>
    </html>
    `)
    next();
})

router.get('/trayectoria-educativa',(req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Saying Hi</title>
    </head>
    <body>
        <h1>Hi EDUCATION</h1>
    </body>
    </html>
    `)
    next();
    
});

module.exports = router;

