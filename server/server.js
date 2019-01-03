// Depedencies
const fastify = require('fastify')({
    logger: true,
});
const path = require('path');
const route = require('./routes');

class Server {
    constructor(PORT) {
        this.port = PORT;
    }

    async start() {
        try {
            fastify.register(require('fastify-static'), {
                root: path.join(__dirname, 'build'),
            })
            fastify.register(route);
            fastify.setErrorHandler((error, req, reply) => {
                if (error instanceof Error) {
                    reply.code(error.status).send({ message: error.message });
                }
            })
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
