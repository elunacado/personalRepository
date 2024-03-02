const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const header = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Casa de la Malanga</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
    <style>
        .hero.is-primary {
            background-color: #00d1b2;
            color: #ffffff;
        }
        .section {
            padding: 3rem 1.5rem;
        }
    </style>
</head>
<body>
<!-- Navegación -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                La Casa de la Malanga
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="/sabores">Sabores</a>
                <a class="navbar-item" href="/aboutUs">Sobre Nosotros</a>
                <a class="navbar-item" href="/contacto">Contactanos</a>
                <a class="navbar-item" href="/resenas">Reseñas</a>
            </div>
        </div>
    </nav>
`;
const footer = `
</body>
</html>`;


// Configura body-parser para manejar las solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
    let content = header;
    content += `    

    <!-- Hero -->
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">
                Bienvenidos a La Casa de la Malanga
            </p>
            <p class="subtitle">
                El mejor lugar para comprar malangas frescas en línea.
            </p>
        </div>
    </section>

    `;
    content += footer;

    res.send(content);
});


app.get('/aboutUs', (req, res) => {
    let content = header;
    content += `    
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">
                Sobre Nosotros
            </p>
            <p class="subtitle">
                Conoce más sobre La Casa de la Malanga
            </p>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h1 class="title">Nuestra Historia</h1>
            <p>
                La Casa de la Malanga nació en 2010, fruto de la pasión de una familia dedicada al cultivo de la malanga. 
                Con más de una década de experiencia, hemos crecido de un pequeño puesto de mercado a una tienda en línea 
                dedicada a ofrecer las mejores malangas frescas directamente a tu hogar.
            </p>
            <br>
            <h1 class="title">Misión</h1>
            <p>
                Nuestra misión es proporcionar a nuestros clientes malangas de la más alta calidad, cultivadas de manera 
                sostenible y entregadas con eficiencia. Buscamos no solo satisfacer las necesidades de nuestros clientes, 
                sino también contribuir positivamente a la comunidad y al medio ambiente.
            </p>
            <br>
            <h1 class="title">Visión</h1>
            <p>
                Nos proyectamos como líderes en el mercado de malangas, expandiendo nuestra presencia no solo en el ámbito 
                local sino también internacional. Aspiramos a ser sinónimo de calidad, frescura y servicio excepcional en 
                el sector de alimentos.
            </p>
            <br>
            <h1 class="title">Valores</h1>
            <ul>
                <li><strong>Calidad:</strong> Garantizamos la mejor calidad en todos nuestros productos.</li>
                <li><strong>Sostenibilidad:</strong> Comprometidos con prácticas agrícolas sostenibles.</li>
                <li><strong>Comunidad:</strong> Apoyamos el desarrollo de nuestra comunidad local.</li>
                <li><strong>Servicio al cliente:</strong> Nos esforzamos por superar las expectativas de nuestros clientes.</li>
            </ul>
        </div>
    </section>
    `;
    content += footer;

    res.send(content);
});

app.get('/sabores', (req, res) => {
    let content = header;
    content += `    
    <!-- Hero -->
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">
                Nuestros Sabores
            </p>
            <p class="subtitle">
                Descubre la variedad de malangas que ofrecemos
            </p>
        </div>
    </section>

    <!-- Sección de Sabores -->
    <section class="section">
        <div class="container">
            <h1 class="title">Explora Nuestros Sabores</h1>
            <div class="columns">
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://www.cadenadial.com/wp-content/uploads/2021/11/malanga-3.jpg" >
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">Malanga Tradicional</p>
                                </div>
                            </div>

                            <div class="content">
                                La clásica malanga, perfecta para una amplia variedad de platos. Nutritiva y deliciosa.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="https://abasto.com/wp-content/uploads/2023/05/My-project.jpg" >
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">Malanga Morada</p>
                                </div>
                            </div>

                            <div class="content">
                                Una variedad única con un toque dulce. Ideal para postres o platos creativos.
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Repite el bloque <div class="column"> para más sabores -->
            </div>
        </div>
    </section>
    `;
    content += footer;

    res.send(content);
});


app.get('/contacto', (req, res) => {
    let content = header;
    content += `    
    <!-- Hero -->
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">
                Contáctanos
            </p>
            <p class="subtitle">
                Estamos aquí para ayudarte
            </p>
        </div>
    </section>

    <!-- Sección de Contacto -->
    <section class="section">
        <div class="container">
            <h1 class="title">Envíanos un Mensaje</h1>
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <form action="/contacto" method="post"> <!-- Cambio a método POST -->
                        <div class="field">
                            <label class="label">Nombre</label>
                            <div class="control">
                                <input class="input" type="text" name="nombre" placeholder="Tu nombre">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Correo Electrónico</label>
                            <div class="control">
                                <input class="input" type="email" name="email" placeholder="tucorreo@example.com">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Mensaje</label>
                            <div class="control">
                                <textarea class="textarea" name="mensaje" placeholder="Escribe tu mensaje aquí"></textarea>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" type="submit">Enviar Mensaje</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
    content += footer;

    res.send(content);
});

// Definición de la ruta POST para manejar los datos del formulario
app.post('/contacto', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const mensaje = req.body.mensaje;

    // Construir la página de respuesta con los datos recibidos
    let content = header;
    content += `    
    <!-- Hero -->
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">
                Contáctanos
            </p>
            <p class="subtitle">
                Estamos aquí para ayudarte
            </p>
        </div>
    </section>

    <!-- Sección de Respuesta -->
    <section class="section">
        <div class="container">
            <h1 class="title">Mensaje Enviado</h1>
            <div class="content">
                <p>Nombre: ${nombre}</p>
                <p>Correo Electrónico: ${email}</p>
                <p>Mensaje: ${mensaje}</p>
            </div>
        </div>
    </section>
    `;
    content += footer;

    res.send(content);
});


app.get('/resenas', (req, res) => {
    let content = header;
    content += `
    <!-- Hero -->
    <section class="hero is-info">
        <div class="hero-body">
            <p class="title">
                Reseñas de Nuestros Clientes
            </p>
            <p class="subtitle">
                Lo que nuestros clientes dicen de nosotros
            </p>
        </div>
    </section>

    <!-- Sección de Reseñas -->
    <section class="section">
        <div class="container">
            <h1 class="title">Reseñas Recientes</h1>
            <!-- Ejemplo de Reseña 1 -->
            <div class="box">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Juan Pérez</strong> <small>@juanperez</small> <small>31m</small>
                                <br>
                                ¡La calidad de las malangas es excepcional! Siempre frescas y entregadas a tiempo. Definitivamente recomendaré La Casa de la Malanga a mis amigos y familiares.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            <!-- Ejemplo de Reseña 2 -->
            <div class="box">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Maria González</strong> <small>@mariagonzalez</small> <small>2h</small>
                                <br>
                                Excelente servicio al cliente y producto de primera calidad. ¡Mi lugar de confianza para comprar malangas!
                            </p>
                        </div>
                    </div>
                </article>
            </div>
            <!-- Aquí podrías seguir agregando más reseñas o incluso cargarlas dinámicamente desde una base de datos -->
        </div>
    </section>
    `;
    content += footer;

    res.send(content);
});


// Middleware de Error 404
app.use((req, res) => {
    res.status(404).send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 Not Found</title>
    </head>
    <body>
        <h1>404 Not Found</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
    </body>
    </html>
    `);
});

// Inicia el servidor
const PORT = 3000; // Puedes cambiar este puerto a cualquier otro que desees
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
