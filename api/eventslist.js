const eventsList = {
  "eventsList": [
    {
      "id": 2025,
      "name": "Celebration",
      "description": "Weekend celebration",
      "fbEventUrl": null,
      "startsAt": "02:00",
      "endsAt": "02:15",
      "date": "2019-06-10",
      "venueId": 2,
      "repeatable": true,
      "deleted": false,
      "pictureUrl": "http://www.free-event.com/wp-content/uploads/2018/03/gibus-free-event-convention-corporate-copia.jpg",
      "lockedToWebForm": false,
      "enableFormType": "ALL",
      "ticketsEvent": false
    },
    {
      "id": 2026,
      "name": "Always",
      "description": "Super night",
      "fbEventUrl": null,
      "startsAt": "01:00",
      "endsAt": "02:00",
      "date": "2019-06-10",
      "venueId": 2,
      "repeatable": true,
      "deleted": false,
      "pictureUrl": "https://visitdallas.imgix.net/events/app/events-app-hero.jpeg",
      "lockedToWebForm": false,
      "enableFormType": "ALL",
      "ticketsEvent": false
    },
    {
      "id": 2037,
      "name": "Daily",
      "description": "Daily event",
      "fbEventUrl": null,
      "startsAt": "01:00",
      "endsAt": "06:00",
      "date": "2019-06-10",
      "venueId": 2,
      "repeatable": true,
      "deleted": false,
      "pictureUrl": "http://event.svetsky.ru/assets/uploads/images/portfolio/svetskie_meropriyatiya/svets-(7).jpg",
      "lockedToWebForm": false,
      "enableFormType": "ALL",
      "ticketsEvent": false
    }
  ]
}
module.exports = function (server, mongoose, logger) {
  server.route({
    method: 'GET',
    path: '/events-list',
    config: {
      handler: (request, h) => eventsList,
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
      /*,
      tags: ['api'],
      plugins: {
        'hapi-swagger': {}
      }*/
    }
  })
}