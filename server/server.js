// Depedencies
const fastify = require('fastify')({
    logger: true,
});


class Server {
    constructor(PORT) {
        this.port = PORT;
    }
    
    async start() {
        try {
            
            fastify.get('/', async (req, res) => {
                return { hello: 'world' };
            });

            await fastify.listen(this.port, '0.0.0.0', (err, address) => {
                if (err) {
                    fastify.log.error(err);
                    process.exit(1);
                }
                fastify.log.info(`server listening on ${address}`);
            })
        } catch (err) {
            fastify.log.error(err);
            process.exit(1)
        }
    }
}

module.exports = Server;
