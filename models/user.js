
const mongoose = require("mongoose");
const Joi = require('joi');

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String
    }
  },
  phone: String,
  website: String,
  company: {
    name: String
  }

}, { versionKey: false });

const validateUserSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().required(),
  address: Joi.object({
    street: Joi.string(),
    suite: Joi.string(),
    city: Joi.string(),
    zipcode: Joi.string(),
    geo: Joi.object({
      lat: Joi.string(),
      lng: Joi.strict()
    })
  }),
  phone: Joi.string(),
  website: Joi.string(),
  company: Joi.object({
    name: Joi.string()
  })
})


module.exports = {
  User: mongoose.model('User', userSchema),
  ValidateUser: validateUserSchema
};