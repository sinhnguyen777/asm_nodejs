const User = require('../models/user')
const bcrypt = require('bcrypt');


exports.getLogin = (req, res) => {
    //đọc database
    res.render('login');
}
exports.getRegistion = (req, res) => {
    //đọc database
    res.render('register');
}

exports.getRegister = (req, res) => {
    //check lỗi -> validation_result
    //đọc form
    const {user_name, user_email, user_pass} = req.body;
    bcrypt.hash(user_pass, 12).then((hash_pass) => {
        //INSERTING USER INTO DATABASE
        const user = new User({user_name:user_name, user_email:user_email, user_pass:hash_pass});
        user
        .save()
        .then(result => {
            res.send(`your accout has been created successfully,
            Now you can <a href="/login">Login</a> `);
        })
        .catch(err => {
            //xuất lỗi
            if(err) throw err;
        })
        res.render('register');
    })
}

exports.actionLogin = (req, res) => {
    //check lỗi -> validation_result
    //đọc form
    const {user_email, user_pass} = res.body
    //Nếu validation ko lỗi
    User.findAll({where:{user_email:user_email}}).then(result => {
        if (result.length > 0) {
            bcrypt.compare(user_pass, result[0].user_pass).then(compare_result => {
                if (compare_result === true) {
                    req.session.isLoggedIn = true;
                    req.session.userID = result[0].user_id
                    res.redirect('/product');
                } else {
                    console.log('fail !!!')
                    res.render('login', {
                        login_errors:['Invalid Password']
                    })
                }
            })
        }
    })
    .catch(err => {
        //Xuất lỗi 
        if (err) throw err;
    })
    res.render('login');
}
