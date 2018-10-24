const express = require('express');
const router = express.Router();
const productRouter = require('./products');
const todoRouter = require('./todo');
const userRouter = require('./user')

router.use('/products', productRouter);
router.use('/todo', todoRouter);
router.use('/user', userRouter);

router.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = router;