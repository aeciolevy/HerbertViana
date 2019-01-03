// Environmental variables
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env')});
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8181;

const Server = require('./server');
const server = new Server(PORT);
try {
    let dbURL = null;
    if (process.env.NODE_ENV === 'development') {
        dbURL = process.env.MONGODEV;
    } else {
        dbURL = process.env.MONGOPROD;
    }
    mongoose.connect(dbURL, { useNewUrlParser: true })
        .then(() => {
            console.log('DB Connected');
            server.start();
        })
        .catch(err => { throw err })
} catch (err) {
    console.log(err)
}
