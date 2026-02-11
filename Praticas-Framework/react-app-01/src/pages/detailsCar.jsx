import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./detailsCar.css";

export default function DetailsCar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/anuncios/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar o anúncio");
        }
        return response.json();
      })
      .then((data) => {
        setCar(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Carregando detalhes...</p>;
  }

  if (!car) {
    return <p>Anúncio não encontrado</p>;
  }

  return (
    <div className="details-container">
      <button id="button-back" onClick={() => navigate("/")}>
        {" "}
        &lt; BACK{" "}
      </button>

      <h1>
        {car.brand} {car.model}
      </h1>

      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        style={{ maxWidth: "400px", borderRadius: "8px" }}
      />

      <p>
        <strong>Ano:</strong> {car.year || "Não informado"}
      </p>
      <p>
        <strong>Categoria:</strong> {car.category || "Não informado"}
      </p>
      <p>
        <strong>KM:</strong> {car.km || "Não informado"}
      </p>
      <p>
        <strong>Preço:</strong> {car.price || "Não informado"}
      </p>

      <p>
        <strong>Descrição:</strong>
      </p>
      <p>{car.description || "Sem descrição"}</p>

      <p>
        <strong>Contato:</strong> {car.contact || "Não informado"}
      </p>
    </div>
  );
}
