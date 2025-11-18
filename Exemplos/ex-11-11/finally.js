const produtos = [
  { nome: "Notebook Dell Inspiron", preco: 3899.90, qtd: 5, categoria: "Informática" },
  { nome: "Smartphone Samsung Galaxy A54", preco: 2199.00, qtd: 12, categoria: "Eletrônicos" },
  { nome: "Teclado Mecânico Redragon", preco: 299.90, qtd: 8, categoria: "Periféricos" },
  { nome: "Cadeira Gamer ThunderX3", preco: 1299.00, qtd: 4, categoria: "Móveis" },
  { nome: "Monitor LG Ultrawide 29\"", preco: 1449.00, qtd: 6, categoria: "Informática" },
  { nome: "Camiseta Nike Dri-Fit", preco: 149.90, qtd: 20, categoria: "Vestuário" },
  { nome: "Tênis Adidas Run Falcon", preco: 349.90, qtd: 15, categoria: "Calçados" },
  { nome: "Fone Bluetooth JBL Tune 510BT", preco: 299.00, qtd: 10, categoria: "Áudio" },
  { nome: "Livro: Clean Code", preco: 99.90, qtd: 25, categoria: "Livros" },
  { nome: "Mouse Logitech M170", preco: 89.90, qtd: 30, categoria: "Periféricos" }
];

const numbers = [23,5,66,5,45,34,9]

// Padrao de composição de funcoes PIPE
// A saida de uma function serve de entrada para outra function
// Usamos para criar um pipeline de execucões
const pipe = (...fns) => (dados) => fns.reduce((acc, fn) => fn(acc), dados);
const somatoria = (nums) => nums.reduce((acc, num) => acc + num)

const execution = pipe(
    somatoria,
    console.log
)
execution(numbers)

