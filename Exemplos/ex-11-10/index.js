/**
 * Higher - Order Function - Map, Filter, Reduce (Metedos de Interação)
 * 
 */

// map() realiza um mapeamento em cima de um array, gerando um novo array transformado, usando uma regra para esse novo mapeamento
const nums = [1,3,4,5,6,7];
const double = nums.map(num => num * 2);
console.log(double);

// filter() Itera sobre um array, realizando uma filtragem dos elementos. Retorna apenas um novo array com os valores filtrados.

const evens = nums.filter(num => num % 2 == 0);
console.log(evens)

// reduce() - itera sobre o array, realizando uma operacao de redução e retornadando um unico valor ao final.

const sumEvens = nums.reduce((acc, num) => num % 2 == 0 ? acc + num : acc, 0)
console.log(sumEvens)