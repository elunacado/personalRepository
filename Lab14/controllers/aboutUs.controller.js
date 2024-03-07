exports.get_aboutUs = (req, res, next) => {
    res.render('aboutus.ejs')
    next();
    
}