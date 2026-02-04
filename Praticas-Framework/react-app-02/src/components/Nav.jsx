import "./Nav.css";
import Navbar from "./Navbar";
import avatar from "../assets/baixados.jpeg";

export default function Nav({setPagina}) {
  return (
    <div className="nav-container">
      <Navbar setPagina={setPagina} />

      <div className="profile">
        <img src={avatar} className="avatar" />

        <div className="profile-text">
          <p id="name">Mateus Ribeiro</p>
          <p id="descricao-persona">
            Sou Mateus Ribeiro, desenvolvedor em formação com forte interesse em
            desenvolvimento de software e tecnologia aplicada à resolução de
            problemas reais. Tenho experiência com programação em Python, Java,
            Kotlin e JavaScript, além de desenvolvimento web com React e
            aplicações mobile Android. Já desenvolvi projetos envolvendo bancos
            de dados (SQLite/Room), APIs, arquitetura de software, padrões de
            projeto, além de sistemas com foco em organização, desempenho e boa
            experiência do usuário.
          </p>
        </div>
      </div>
    </div>
  );
}
