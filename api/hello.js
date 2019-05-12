module.exports = function (server, mongoose, logger) {
  server.route({
    method: 'GET',
    path: '/hello-world',
    config: {
      handler: function(request, h) { return "H3llo W0r1d" }/*,
      tags: ['api'],
      plugins: {
        'hapi-swagger': {}
      }*/
    }
  })
}