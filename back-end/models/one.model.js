const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const oneSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const One = mongoose.model('One', oneSchema);

module.exports = One;