const mongoose = require("mongoose");
const Joi = require('joi');

const productSchema = mongoose.Schema({
  name: String,
  price: Number
}, { versionKey: false });

const validateProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required()
})


module.exports = {
  Product: mongoose.model('Product', productSchema),
  ValidateProductSchema: validateProductSchema
};

