/**
 * Aula sobre imultabilidade
 * Data 20/10/2025
 */

//Valores Primitivos 
let a = "Maria";
a = "Marcos"; // Não altera o valor inicial, simplismente atribui outro valor
a[2] = "L"; // NÃO ALTERA VALOR
let b = a;
console.log("Valor de A: ", a, "Valor de B: ", b);

console.log(b);



const array = [2, 4, 6, 8 ,10];

const d = array;
array[0] = 11;

console.log(array, d);
