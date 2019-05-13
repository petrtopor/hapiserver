let Hapi = require('hapi')
let mongoose = require('mongoose')
let RestHapi = require('rest-hapi')

async function api() {
  try {
    const serverOptions = {
      port: 80
    }

    let server = Hapi.Server(serverOptions)
    
    let config = {
      appTitle: "My API"
    };

    await server.register({
      plugin: RestHapi,
      options: {
        mongoose,
        config
      }
    })

    await server.start()

    console.log("Server ready", server.info)
    
    return server
  } catch (err) {
    console.log("Error starting server:", err);
  }
}

module.exports = api()