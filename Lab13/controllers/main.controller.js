exports.get_main = (req, res, next) =>{
    res.render('home.ejs');
    next();
};