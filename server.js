const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = 2;

app.listen(process.env.port || port);
console.log(`I'm listening on port number ${process.env.port || port}!!!!!!!!`);