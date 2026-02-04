import "./Navbar.css";

export default function Navbar({ setPagina }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPagina("blog");
            }}
          >
            Blog
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPagina("descricao");
            }}
          >
            Sobre
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPagina("descricao");
            }}
          >
            Descrição
          </a>
        </li>
      </ul>
    </nav>
  );
}
