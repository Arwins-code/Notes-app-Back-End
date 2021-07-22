const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();

/**penerapan CORS lebih mudah di Hapi cukup tambahkan pada spesifik route contoh:
 * {
  method: 'POST',
  path: '/notes',
  handler: addNoteHandler,
  options: {
    cors: {
      origin: ['*'],
    },
  },
},
 */

/**Jika mau CORS di aktifkan di seluruh route cukup tambahkan CORS pada konfigurasi awal contoh:
 * const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});
 */
