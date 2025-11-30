const configuracoes = {
  cache: null // undefined ou null
};

const tempoExpiracaoSeguro = configuracoes.cache?.tempoExpiracao;
console.log(tempoExpiracaoSeguro); 

const tempoExpiracao = configuracoes.cache?.tempoExpiracao ?? 600;
console.log(tempoExpiracao); 

const dispositivo1 = { info: { bateria: { nivel: 85 } } };
const dispositivo2 = { info: null };
const dispositivo3 = { info: { bateria: { nivel: 0 } } }; // 0 é válido

const nivel1 = dispositivo1.info?.bateria?.nivel ?? -1;
const nivel2 = dispositivo2.info?.bateria?.nivel ?? -1;
const nivel3 = dispositivo3.info?.bateria?.nivel ?? -1;

console.log(nivel1); // 85

console.log(nivel2); // info existe, mas é null. "dispositivo2.info?.bateria" retorna undefined: Portanto → undefined ?? -1 resulta em -1

console.log(nivel3); // 0 é um valor válido, 0 NÃO ativa o operador ??, porque ele só substitui se for null ou undefined. Logo, retorna 0