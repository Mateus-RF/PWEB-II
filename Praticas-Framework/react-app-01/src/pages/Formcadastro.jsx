import { useState } from "react";
import "./formcadastro.css";
import isValidForm from "../components/Validador";
import { useNavigate } from "react-router-dom";

export default function CadastroVeiculo() {
  const [formData, setFormData] = useState({
    model: "",
    brand: "",
    description: "",
    price: "",
    category: "",
    year: "",
    km: "",
    contact: "",
    image:
      "https://px-web-images6.pixpa.com/hrHTbtvRH4eT1MaXnW0nEs0SJ4Fv6i6otwUAe3cb0UA/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNjMyODI0MDc1LTQzOTIxLXN0ZXBoYW4tbG91aXMtMWp0ai1sLTVydXUtdW5zcGxhc2hqcGcucG5n",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidForm(formData)) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    fetch("http://localhost:3000/anuncios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao cadastrar");
      }
      navigate("/");
    });
  };
  return (
    <form className="formCadastro" onSubmit={handleSubmit}>
      <h1>Cadastro de Veículo</h1>

      <div className="formGrid">
        <div className="formContainer1">
          <label>
            Titulo:
            <input
              type="text"
              name="model"
              placeholder="Nome do veículo"
              value={formData.model}
              onChange={handleChange}
            />
          </label>

          <label>
            Marca:
            <input
              type="text"
              name="brand"
              placeholder="Marca Ex: Toyota"
              value={formData.brand}
              onChange={handleChange}
            />
          </label>
          <label>
            Categoria:
            <input
              type="text"
              name="category"
              placeholder="Ex: SUV"
              value={formData.category}
              onChange={handleChange}
            />
          </label>

          <label>
            Descrição:
            <input
              type="text"
              name="description"
              placeholder="Descrição do veículo"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="formContainer2">
          <label>
            Valor:
            <input
              type="number"
              name="price"
              placeholder="Valor monetário"
              value={formData.price}
              onChange={handleChange}
            />
          </label>

          <label>
            Ano:
            <input
              type="number"
              name="year"
              placeholder="Ano de fabricação"
              value={formData.year}
              onChange={handleChange}
            />
          </label>

          <label>
            Quilometragem:
            <input
              type="number"
              name="km"
              placeholder="Quilometragem atual"
              value={formData.km}
              onChange={handleChange}
            />
          </label>

          <label>
            Contato do vendedor:
            <input
              type="tel"
              name="contact"
              placeholder="Informações de contato"
              value={formData.contact}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <button id="buttonForm" type="submit">
        Enviar formulário
      </button>
    </form>
  );
}
