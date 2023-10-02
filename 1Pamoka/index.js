const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const casual = require("casual");
app.use(cors());

app.get("/", (req, res) => {
  // const city = casual.city
  // const randomNum = Math.floor(Math.random()*10)+1
  // const fullname = `${casual.name_suffix}. ${casual.name} ${casual.last_name}`
  res.send("ok");
});

const carBrands = ["BMW", "AUDI", "OPEL", "VW"];
app.get("/carBrands", (req, res) => {
  res.send(carBrands);
});

app.get("/carBrands/:firstLetter", (req, res) => {
  const { firstLetter } = req.params;

  const foundCars = carBrands.filter((car) => car[0] === firstLetter);
  res.send(foundCars);
});

app.listen(port, () => {
  console.log(`app listening to port: ${port}`);
});
