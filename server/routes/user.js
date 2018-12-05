module.exports = function (fastify, opts, next) {
    fastify.get('/', (req, res) => {
        console.log('here')
        res.send({ status: 'test'});
    })
    next();
}
