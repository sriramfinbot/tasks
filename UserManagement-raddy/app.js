require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var expressLayout = require('express-ejs-layouts')
const connectDB = require('./server/config/db')
const { flash } =  require('express-flash-message')
const session = require('express-session')


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const port = 5000 || process.env.PORT;

// Connect to Database
connectDB();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// static files
app.use(express.static("public"));

// Express Session
app.use(
  session({
    secret: 'secret',
    resave: false,  
    saveUninitialized: true, 
    cookie: {
      maxAge: 1000 * 60 + 24 * 7
    }
  })
);

// Flash Messages
app.use(flash({ sessionKeyName: 'flashMessage'}))

// Templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Home
app.get("/", (req, res) => {

  const locals = {
    title: 'NodeJs', 
    description: "Free NodeJs User Management System"
  }
  res.render('index', locals);
})

// Routes
app.use('/', require('./server/routes/customer'))

// Handle 404
app.get('*', (req, res) => {
  res.status(404).render('404')
});

app.listen(port, ()  => {
  console.log(`Server is running on ${port}`);
})


module.exports = app;
