const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Shoes Api',
    description: 'Shoes Api'
  },
  host: 'proj2-crud-cse341.onrender.com/login',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)