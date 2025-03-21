const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const shoesFilePath = path.join(__dirname, "../model/shoes.json"); // ✅ Correct Path

// API to get all shoes
router.get("/", (req, res) => {
  fs.readFile(shoesFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to load shoes data" });
    }
    res.json(JSON.parse(data));
  });
});

// API to get shoes by brand
router.get("/:brand", (req, res) => {
  fs.readFile(shoesFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to load shoes data" });
    }
    const shoes = JSON.parse(data);
    const filteredShoes = shoes.filter(
      (shoe) => shoe.brand.toLowerCase() === req.params.brand.toLowerCase()
    );
    res.json(filteredShoes);
  });
});

module.exports = router;
