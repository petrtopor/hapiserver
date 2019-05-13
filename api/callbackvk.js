module.exports = function (server, mongoose, logger) {
  server.route({
    method: 'POST',
    path: '/callbackvk',
    config: {
      handler: (request, h) => {
        if(request.payload['type'] === 'confirmation' && (request.payload['group_id'] === '182152948' || request.payload['group_id'] === 182152948)) {
          return '1d637612'
        } else {
          // return request.payload
          return 0
        }
      }
    }
  })
}