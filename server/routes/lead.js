const reqLead = require('../requestHandlers/lead');

const router = function leadRouter(fastify, opts, next) {
    fastify.post('/register', reqLead.registerLead);
    next();
};

module.exports = router;
