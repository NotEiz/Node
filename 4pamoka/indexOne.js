const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("../4pamoka/products");
const cors = require("cors");

mongoose.connect("mongodb+srv://admin:admin@cluster0.zssvc5z.mongodb.net/");
app.use(cors());
app.use(express.json());

const port = 3000;

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send({ err: "something wrong" });
  }
});

app.listen(port, () => {
  console.log(`app listening to port: ${port}`);
});
