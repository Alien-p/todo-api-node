/**
 * Required dependencies
 */
const mongoose = require("mongoose");

/**
 * Configure connection to mongodb
 */
mongoose.set('debug', true);    //Enable debug mode
mongoose.connect('mongodb://localhost:27017/todo-api',  {useNewUrlParser: true});
mongoose.Promise = Promise;     //Enable promises

module.exports.Todo = require("./todo");