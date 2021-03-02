const User = require('../models/user')
const Product = require('../models/product')
const bcrypt = require('bcrypt');
// const bcrypt = require('bcryptjs');

exports.getLogin = (req, res) => {
    res.render('login');
}
exports.getRegistion = (req, res) => {
    res.render('register');
}

exports.getRegister = (req, res, next) => {
    //check lỗi -> validation_result
    //đọc form
    const {user_name, user_email, user_pass} = req.body;
    bcrypt.hash(user_pass, 10).then((hash_pass) => {
        console.log(hash_pass);
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
    })
}

exports.actionLogin = (req, res) => {
    //check lỗi -> validation_result
    //đọc form
    var idPro = req.params.id;
    var productDetail = Product.findById(idPro);
    const {user_name, user_pass} = req.body
    //Nếu validation ko lỗi
    User.findAll({where:{user_name:user_name}})
    .then(result => {
        if (result.length > 0) {
            bcrypt.compare(user_pass, result[0].user_pass).then(compare_result => {
                if (compare_result === true) {
                    req.session.isLoggedIn = true;
                    req.session.userID = result[0].user_id
                    res.render('admin/view/index');
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
}
