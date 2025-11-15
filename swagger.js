const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Professional Contact API',
    description: 'An api that performs CRUD operations on a list of professional contacts'
  },
  host: 'localhost:8080',
  schemes: ["http", "https"]
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

// swaggerAutogen(outputFile, routes, doc);

swaggerAutogen(outputFile, endpointFiles, doc).then(async () => { await import ("./server.js")});