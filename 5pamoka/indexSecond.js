const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const URI = process.env.DB_CONNECTION_URI;
const client = new MongoClient(URI);

app.get("/Restaurants", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("ManoDB")
      .collection("Restaurants")
      .find()
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/Restaurants", async (req, res) => {
  const { name, address, city, cuisine, rating } = req.body;
  try {
    const newRestaurant = { name, address, city, cuisine, rating };
    const con = await client.connect();
    const data = await con
      .db("ManoDB")
      .collection("Restaurants")
      .insertOne(newRestaurant);
    await con.close();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
