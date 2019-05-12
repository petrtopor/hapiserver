module.exports = function (server, mongoose, logger) {
  server.route({
    method: 'GET',
    path: '/callbackvk',
    config: {
      handler: function(request, h) {
        return '1d637612'
      }
    }
  })
}