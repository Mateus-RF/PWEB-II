function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade
}

Pessoa.prototype.aniversario = function(){
    this.idade++;
    console.log(`Feliz aniversario, ${this.nome}! Agora vc tem ${this.idade}`)

}
const PessoaP = new Pessoa("Pedro", 25);
console.log(PessoaP.nome);
PessoaP.aniversario(); 


class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    aniversario(){
        this.idade++;
        console.log(`Feliz aniversario, ${this.nome}! Agora vc tem ${this.idade}`)   
    }
}

const p = new Pessoa