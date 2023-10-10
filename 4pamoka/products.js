const mongoose = require("mongoose");

const product = new mongoose.Schema({});

module.exports = mongoose.module("Products", product);
