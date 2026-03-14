const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.post("/add", async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    console.error("Error saving product:", error)
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  
    const products = await Product.find();
    res.json(products);
});

module.exports = router;