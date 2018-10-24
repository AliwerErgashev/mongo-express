const mongoose = require("mongoose");
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const todoSchema = mongoose.Schema({
  userId: Number,
  title: String,
  completed: Boolean
}, { versionKey: false });

const validateTodoSchema = Joi.object({
  userId: Joi.number().required(),
  title: Joi.strict().required(),
  completed: Joi.boolean().default(false)
})


module.exports = {
  Todo: mongoose.model('Todo', todoSchema),
  ValidateTodoSchema: validateTodoSchema
};

