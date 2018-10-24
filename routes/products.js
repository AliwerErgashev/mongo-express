var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler');
const mongoose = require("mongoose");
const Product = require('../models/product').Product
const Joi = require('joi');
const ValidateProductSchema = require('../models/product').ValidateProductSchema

const validateProduct = async (product) => {
  product = await Joi.validate(product, ValidateProductSchema);
  return await new Product(product).save();
}

router.get('/', asyncHandler(async (req, res, next) => {
  res.status(200).send(await Product.find());
}))

router.post('/', asyncHandler(async (req, res, next) => {
  const product = await validateProduct(req.body);
  res.status(200).send(product);
}))

router.get('/:productId', asyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.status(200).send(product);
}))

module.exports = router;