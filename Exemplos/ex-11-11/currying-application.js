// const soma = (a, b, c) => a + b + c; // Função original
// const somaCurried = (a) => (b) => (c) => a + b + c; // Função Curried
// console.log(somaCurried(1)(2)(3)); // 6
// // Partial Application via Currying:
// const somaCom1 = somaCurried(1); // Retorna a função b => c => 1 + b + c
// const somaCom1e2 = somaCom1(2); // Retorna a função c => 1 + 2 + c

// console.log(somaCom1e2(3)); // 6


const log = (nivel) => (tag) => (msg) => console.log(`[${nivel}] <${tag}>: ${msg}`)

const logInfo = log("INFO")
const logError = log("ERROR")
const lorgWarn = log("WARNING")

const logBd = logInfo("BD")
const logBackend = logInfo("Backend")
const logDependencias = log("WARNING")("LIB")

logBd("Conexão bem sucedida")
logBackend("Backend com conexão sucedidida")
logDependencias("Algumas dependencias estao desatualizadas")
