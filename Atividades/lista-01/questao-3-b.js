function produtorioNumeros(){
    valorTotal = 1;
    for(let num of arguments){
        valorTotal *= num;
    };
    return valorTotal;
};

const valorFinal = produtorioNumeros();
console.log("Produtorio dos Numeros: " + valorFinal);