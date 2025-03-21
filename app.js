const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5400;

app.use(cors());
app.use(express.json());

app.get("/shoes/:brand", (req, res) => {
  const brand = req.params.brand.toLowerCase();
  const filePath = path.join(__dirname, "model", "shoes.json"); //

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return res.status(500).json({ error: "Failed to load shoes data" });
    }

    try {
      const shoes = JSON.parse(data);
      const filteredShoes = shoes.filter(
        (shoe) => shoe.brand.toLowerCase() === brand
      );

      if (filteredShoes.length === 0) {
        return res
          .status(404)
          .json({ error: `No shoes found for brand: ${brand}` });
      }

      res.json(filteredShoes);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      return res
        .status(500)
        .json({ error: "Invalid JSON format in shoes.json" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
