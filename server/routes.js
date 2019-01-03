const user = require('./routes/user');
const lead = require('./routes/lead');


async function routes (fastify) {
    fastify.register(user, { prefix: 'user'});
    fastify.register(lead, { prefix: 'lead'});
};

module.exports = routes;
