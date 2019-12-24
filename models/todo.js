/**
 * Required dependencies
 */
const mongoose = require("mongoose");


/**
 * Define todo schema
 */
const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name can not be blank!"
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;