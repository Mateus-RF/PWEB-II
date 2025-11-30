const respostaApi = {
  id: 101,
  username: "user_a",
  email: "a@ex.com",
  status: "ativo"
};


// Destructuring
const { username, email } = respostaApi;

console.log(username); // "user_a"
console.log(email);    // "a@ex.com"

// Rest Operator
const { id, ...dadosComplementares } = respostaApi;

console.log(id);                 
console.log(dadosComplementares);


// Spread Operator
const configPadrao = { tema: "dark", notificacoes: true };
const configUsuario = { notificacoes: false };

const configFinal = { 
  ...configPadrao, 
  ...configUsuario
};

console.log(configFinal);


