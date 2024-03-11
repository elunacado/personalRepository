const Contacto = require('../models/contacto.model');

exports.get_main = async (req, res, next) => {
    try {
        // Fetch all contacts
        const contacts = await Contacto.fetchAll();
        res.render('home.ejs', { data: contacts });

    } catch (error) {
        // Handle errors
        console.error("Error fetching contacts:", error);
        // Render an error page or redirect to an error route
        res.status(500).send("Internal Server Error");
    }
};
