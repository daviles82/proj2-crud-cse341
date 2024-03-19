const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Shoes Api',
    description: 'Shoes Api'
  },
  host: 'localhost:2',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)