// 1. Classe base Usuario
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Email: ${this.email}`);
  }
}

// 2. Classe Administrador que herda de Usuario
class Administrador extends Usuario {
  constructor(nome, email, nivelAcesso) {
    super(nome, email); 
    this.nivelAcesso = nivelAcesso;
  }

  exibirInfo() {
    super.exibirInfo(); 
    console.log(`Nível de Acesso: ${this.nivelAcesso}`);
  }
}


const usuarioComum = new Usuario("Mateus", "mateus@exemplo.com");
const admin = new Administrador("Cristina", "cristina@exemplo.com", "supervisor");

console.log("=== Usuário Comum ===");
usuarioComum.exibirInfo();

console.log("\n=== Administrador ===");
admin.exibirInfo();
