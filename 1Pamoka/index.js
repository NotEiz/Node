const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = 3000;

const cars = [{ id: 1, brand: "BMW" }];
// find all cars
app.get("/cars", (req, res) => {
  res.send(cars);
});
//find one car
app.get("/cars/:id", (req, res) => {
  const { id } = req.params;
  const foundCar = cars.find((car) => car.id === +id);
  if (foundCar) {
    res.send(foundCar);
  } else {
    res.status(404).send({ error: "Car was not found" });
  }
});
//add new car
app.post("/cars", (req, res) => {
  const { title } = req.body;
  const newCar = { id: Date.now(), title };
  cars.push(newCar);
  res.send(newCar);
});
//update car
app.put("/cars/:id", (req, res) => {
  // { id } gautas id bus stringas tai reikia pakeisti
  const { id } = req.params;
  const car = req.body;

  const foundIndex = cars.findIndex((car) => car.id === +id);

  if (foundIndex !== -1) {
    const updatedCar = { id: +id, ...car };
    cars.splice(foundIndex, 1, updatedCar);
    res.send(updatedCar);
  } else res.status(404).send({ error: "Failed to update car" });
});

//delete car
app.delete("/cars/:id", (req, res) => {
  //pasiiemi id
  const { id } = req.params;
  //susirandi indexa masyve su id
  const foundIndex = cars.findIndex((car) => car.id === +id);

  if (foundIndex !== -1) {
    const deleteCar = cars[foundIndex];
    cars.splice(foundIndex, 1);
    res.send(deleteCar);
  } else res.status(404).send({ error: "Failled to delete car" });
});

app.listen(port, () => {
  console.log(`app listening to port: ${port}`);
});
