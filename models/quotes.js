const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    quoteText:String,
    quoteAuthor:String,
})

module.exports = mongoose.model("quote",QuoteSchema)