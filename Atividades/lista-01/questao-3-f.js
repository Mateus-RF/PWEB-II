const Contabancaria = {
    numeroConta : 3839,
    saldo : 0.00,

    depositar(valor) { 
        if (valor > 0) {

            this.saldo += valor; 
            console.log(`Depósito de R$ ${valor.toFixed(2)} efetuado.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    },

    sacar(valor){
        if (valor > 0 && valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} efetuado.`);
        }else {
            console.log("O valor do saque deve ser positivo e menor que valor da conta.");
        }
    },
    informarSaldo(){
        console.log(`Saldo total da conta R$${this.saldo.toFixed(2)} `);
    }
}


Contabancaria.informarSaldo()
Contabancaria.depositar(150)
Contabancaria.depositar(100)
Contabancaria.sacar(75)
Contabancaria.informarSaldo()