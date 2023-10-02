import { useEffect, useState } from "react";

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/carBrands")
      .then((resp) => resp.json())
      .then((cars) => setCars(cars));
  }, []);

  return <ol>{cars.map((car) => car)}</ol>;
};

export default App;
