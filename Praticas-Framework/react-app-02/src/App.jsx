import { useState } from "react";
import Nav from "./components/Nav";
import Descricao from "./components/Descricao";
import Clipping from "./components/Clipping";

export default function App() {
  const [pagina, setPagina] = useState("blog");

  return (
    <>
      <Nav setPagina={setPagina} />

      {pagina === "blog" && <Clipping />}
      {pagina === "descricao" && <Descricao />}
    </>
  );
}
