
import { useEffect, useState } from "react";

import "./App.css";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

							


const App = () => {
  const [cars, setCars] = useState([]);
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/anuncios")
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        return response.json();
      })
      .then(data => {
        setCars(data);
        setAllCars(data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (query) => {
    if (query === '') {
      setCars(allCars);
      return;
    }

    setCars(
      allCars.filter(car =>
        car.model.toLowerCase().includes(query.toLowerCase())
      )
    );

  }

  return (
    <>
      <h1>Anúncios Recentes</h1>
      <SearchBar handleSearch={handleSearch} />

      <div className="cards">
        {cars && cars.map(car => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default App;