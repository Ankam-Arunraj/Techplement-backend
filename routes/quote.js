const express = require("express");
const router = express.Router();
const QuoteModel = require("../models/quotes")
const mongoose = require("mongoose")


router.get('/search', async (req, res) => {
    const { quoteAuthor } = req.params;
    try {
      const quotes = await QuoteModel.find({ quoteAuthor: new RegExp(quoteAuthor, 'i') });
      res.json(quotes);
  } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Add a new quote to the database
  router.post('/add', async (req, res) => {
    console.log(req.body);
    const { quoteText, quoteAuthor } = req.body;
    if (!quoteText || !quoteAuthor) {
      return res.status(400).json({ message: "Text and author are required" });
    }
    try {
      const newQuote = new QuoteModel({ quoteText, quoteAuthor });
      await newQuote.save();
      res.status(201).json(newQuote);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;