const user = require('./routes/user');

async function routes (fastify) {
    fastify.register(user, { prefix: 'user'});
};

module.exports = routes;
