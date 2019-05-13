module.exports = function (server, mongoose, logger) {
  server.route({
    method: 'POST',
    path: '/callbackvk',
    config: {
      handler: (request, h) => {
        const type = request.payload['type']
        switch (type) {
          case 'confirmation': {
            return '1d637612'
          }
          case 'message_new': {
            const object = request.payload['object']
            console.log('message_new:\n', object['text'])
            return 'ok'
          }
          default: {
            return 'ok'
          }
        }
        /*
        if(request.payload['type'] === 'confirmation' && (request.payload['group_id'] === '182152948' || request.payload['group_id'] === 182152948)) {
          return '1d637612'
        } else {
          // return request.payload
          return 0
        }
        */
      }
    }
  })
}