exports.getLogin = (req, res) => {
    //đọc database
    res.render('login');
}

exports.getRegister = (req, res) => {
    //đọc database
    res.render('register');
}