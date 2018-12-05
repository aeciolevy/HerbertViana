// Environmental variables
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env')});

const PORT = process.env.PORT || 8181;

const Server = require('./server');
const server = new Server(PORT);
try {
    server.start();
} catch (err) {
    console.log(err)
}
