// All server configurations, db connections, port settings etc...


const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});

//database connection
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology:true,
    useNewUrlParser:true
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) =>{
    console.error(`database connection error: ${err.message}`);
});

// Require Models/post so that it can be avilable throughout the application
require('./Models/Posts');
const app = require('./app');

//  start server port
const server = app.listen('3000', () =>{
    console.log(`express running on port -> ${server.address().port}`);
    console.log(`http://localhost:${server.address().port}/`)
})