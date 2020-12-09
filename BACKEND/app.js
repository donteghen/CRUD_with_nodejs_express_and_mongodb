const express =  require('express');
const app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

// import out routes
const routes = require('./Routes/PostsRoutes');
// middleware to use routes
app.use('/', jsonParser, routes);

// export the module
module.exports = app;