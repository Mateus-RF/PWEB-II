import "./Descricao.css";

export default function Descricao() {
  return (
    <main className="descricao">
      <h1>Sobre o Blog</h1>

      <p>
        Este blog foi criado com o objetivo de compartilhar conhecimento de
        forma clara, direta e sem hype. Aqui você encontra conteúdos voltados
        para desenvolvimento de software, tecnologia e boas práticas do dia a
        dia.
      </p>

      <p>
        Os artigos abordam temas como programação, ferramentas modernas,
        produtividade, backend, frontend e conceitos atuais do ecossistema tech,
        sempre com foco em aprendizado prático.
      </p>

      <p>
        A seção de <strong>Clipping</strong> reúne links externos selecionados,
        servindo como curadoria de conteúdos relevantes publicados na mídia
        especializada.
      </p>

      <p className="assinatura">
        Conteúdo feito para quem aprende na prática 🚀
      </p>
      <p className="assinatura">
        Detalhe o texto por IA e ficar devendo a Pagina Sobre
      </p>
    </main>
  );
}
