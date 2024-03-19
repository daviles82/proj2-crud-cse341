const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  // #swagger.tags=['Hello World']
  res.send('Hello Folks, nothing to see here!');
});

router.use('/shoes', require('./nikeCollection')); // gets routed to the route/nikeCollection.js file

module.exports = router;
