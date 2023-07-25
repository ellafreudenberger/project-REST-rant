// Babel
require('@babel/register');
require('./index.js'); // Replace 'your-main-file.js' with the actual entry point of your application

// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')


// ECMAScript Modules to enable support for modern JavaScript syntax, including JSX in Node.js
require = require("esm")(module);


// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// Body Parser
app.use(express.urlencoded({ extended: true }))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)




