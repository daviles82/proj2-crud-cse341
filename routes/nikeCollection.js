const express = require('express');
const router = express.Router();

const nikeController = require('../controllers/nikeCollection');

router.get('/', nikeController.getAll);

router.get('/:id', nikeController.getSingle);

router.post('/', nikeController.createShoe);

router.put('/:id', nikeController.updateShoe);

router.delete('/:id', nikeController.deleteShoe);

module.exports = router;
