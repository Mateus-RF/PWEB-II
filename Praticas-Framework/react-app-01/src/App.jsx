import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [cars, setCars] = useState([]);
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/anuncios")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        return response.json();
      })
      .then((data) => {
        setCars(data);
        setAllCars(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (query) => {
    if (query === "") {
      setCars(allCars);
      return;
    }

    setCars(
      allCars.filter((car) =>
        car.model.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };
  const navigate = useNavigate();

  const handleCarClick = (car) => {
    navigate(`/detalhe/${car.id}`);
  };

  return (
    <>
      <h1>Anúncios Recentes</h1>
      <SearchBar handleSearch={handleSearch} />
      <button className="btn-primary" onClick={() => navigate("/cadastro")}>Cadastrar anúncio</button>

      <div className="cards">
        {cars && cars.map((car) => <Card key={car.id} car={car} onClick={() => handleCarClick(car)}/>)}
      </div>
    </>
  );
};

export default App;
