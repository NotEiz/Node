const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = 3000;

const data = [
  {
    id: 1,
    name: "iPhone 13",
    category: "Telefonai",
    price: 1100,
    stock: 10,
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    category: "Telefonai",
    price: 900,
    stock: 5,
  },
  {
    id: 3,
    name: "Dell XPS 15",
    category: "Nešiojami kompiuteriai",
    price: 2000,
    stock: 3,
  },
  {
    id: 4,
    name: "MacBook Pro",
    category: "Nešiojami kompiuteriai",
    price: 2500,
    stock: 20,
  },
  {
    id: 5,
    name: "Sony WH-1000XM4",
    category: "Ausinės",
    price: 350,
    stock: 8,
  },
  {
    id: 6,
    name: "Bose QuietComfort 35 II",
    category: "Ausinės",
    price: 300,
    stock: 12,
  },
];
// find all cars
app.get("/products", (req, res) => {
  const { minPrice, maxPrice } = req.query;

  const filteredMin = data.filter((product) => product.price <= maxPrice);
  const filteredMax = filteredMin.filter(
    (product) => product.price >= minPrice
  );
  res.send(filteredMax);
});
app.get("/products", (req, res) => {
  const { category } = req.query;

  if (category) {
    const filteredCategory = data.filter(
      (product) => product.category === category
    );
    if (filteredCategory.length > 0) {
      res.send(filteredCategory);
    } else {
      res.status(404).send({ error: "Can't find category you want" });
    }
  } else {
    res.send(data);
  }
});
//find one car
app.get("/products", (req, res) => {
  const { id } = req.query;
  console.log(id);
  if (id) {
    const productFind = data.find((product) => product.id === +id);

    res.send(productFind);
  } else {
    res.status(404).send({ error: "Product with this id was not found" });
  }
});

app.get("/products/all", (req, res) => {
  const allProductName = data.map((product) => product.name);
  res.send(allProductName);
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
