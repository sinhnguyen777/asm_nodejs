const express    = require('express');
const path       = require('path');
var bodyParser   = require('body-parser');
const fileUpload = require('express-fileupload');
var mysql        = require('mysql');
var mysql2        = require('mysql2');
const Sequelize = require('sequelize');
const cookieSession = require('cookie-session');
var bcrypt = require('bcrypt');
const { Router } = require('express');
const app        = express();
const port       = 3000;

app.use(express.json());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 3600 * 1000
}))

//Khai bao va su dung template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

//router
const routerSite = require('./router/site');
const routerblog = require('./router/blog');

app.use('/', routerSite);
app.use('/', routerblog);

app.listen(port, ()=>{
    console.log(`ung dung dang chay voi port: ${port}`);
});
