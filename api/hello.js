module.exports = function (server, mongoose, logger) {
  server.route({
    method: 'GET',
    path: '/hello-world',
    config: {
      handler: (request, h) => 'H3llo W0r1d'
      /*,
      tags: ['api'],
      plugins: {
        'hapi-swagger': {}
      }*/
    }
  })
}