// Depedencies
const fastify = require('fastify')({
    logger: true,
});

const route = require('./routes');

class Server {
    constructor(PORT) {
        this.port = PORT;
    }
    
    async start() {
        try {
            fastify.register(route); 

            await fastify.listen(this.port, '0.0.0.0', (err, address) => {
                fastify.log.info(`server listening on ${address}`);
            })
        } catch (err) {
            fastify.log.error(err);
            process.exit(1)
        }
    }
}

module.exports = Server;
