const express = require('express');
const productRouters = require('./products');
const router = express.Router();

router.use('/products', productRouters);

router.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = router;