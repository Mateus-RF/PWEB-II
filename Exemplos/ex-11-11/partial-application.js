// // Função genérica de 3 argumentos
// const log = (nivel, tag, mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);


// // Aplicação Parcial: fixamos o primeiro argumento ('nivel')
// log("ERRO", "<API>", "Erro ao integrar api de pagamento.");

// const logErro = log.bind(null, "ERRO");
// // logErro é uma nova função que espera apenas 'tag' e 'mensagem'
// logErro("API", "Falha ao conectar ao banco de dados.");
// // Saída: [ERRO] <API>: Falha ao conectar ao banco de dados.


const log = (nivel) => (tag, msg) => console.log(`[${nivel}] <${tag}>: ${msg}`)
/**
 * Essa function passa o nivel da mensagem em primeiro plano,
 * e tem como retorno uma outra funcao interna onde é passado a tag do log e mensagem especifica para cada tag.
 */

const logInfo = log("INFO")
const logError = log("ERROR")
const lorgWarn = log("WARNING")

logInfo("BD", "Conexão bem sucedida!")
logInfo("BD", "Conexão mal sucedida!")

logError("API", "Erro de Integração com API de Animes.")

lorgWarn("LIB", "Algumas não dependencias estão desatualizadas.")

log("TESTE")("PERFORMANCE", "Teste finalizado com sucesso.")