var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler');
const mongoose = require("mongoose");
const User = require('../models/user').User
const ValidateUser = require('../models/user').ValidateUser
const Joi = require('joi');

const validateSave = async (user) => {
  user = await Joi.validate(user, ValidateUser);
  return await new User(user).save()
}

router.get('/', asyncHandler(async (req, res, next) => {
  res.status(200).send(await User.find());
}))

router.post('/', asyncHandler(async (req, res, next) => {
  const user = await validateSave(req.body);
  res.status(200).send(user);
}))

router.get('/:userId', asyncHandler(async (req, res, next) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.status(200).send(user);
}))

module.exports = router;