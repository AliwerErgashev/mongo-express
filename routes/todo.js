var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler');
const mongoose = require("mongoose");
const Todo = require('../models/todo').Todo;
const ValidateTodo = require('../models/todo').ValidateTodoSchema
const Joi = require('joi');

const validate = async (todo) => {
  todo = await Joi.validate(todo, ValidateTodo);
  return await new Todo(todo).save();
}

router.get('/', asyncHandler(async (req, res, next) => {
  res.status(200).send(await Todo.find());
}))

router.post('/', asyncHandler(async (req, res, next) => {
  const todo = await validate(req.body);
  res.status(200).send(todo);
}))

router.get('/:todoId', asyncHandler(async (req, res, next) => {
  const { todoId } = req.params;
  const todo = await Todo.findById(todoId);
  res.status(200).send(todo);
}))

module.exports = router;