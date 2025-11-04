function gerarContador(){
    let count = 0;

    return function incrementar(){
        return count++;
    }
}
const contador = gerarContador();
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());


function createTax(tax){
    return function(value){
        return tax * value
    };
};

const value = createTax(0.1)
console.log(value(2009));
console.log(value(1000));
console.log(value(1500));
console.log(value(100));