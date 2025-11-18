### 1) Sobre escopo de código e hoisting, considere o código:

    console.log(multiplica(2,3));
    function multiplica(x, y) { return x * y; }
    const sub = function (a,b) { return a - b; }
    // console.log(sub(5,2)); // descomente e explique o que acontece

Marque a opção correta:
a) Ambas as funções podem ser chamadas antes da definição graças ao hoisting.
b) `Correta()` Apenas multiplica pode ser chamada antes da definição; sub não.
c) Nenhuma pode ser chamada antes da definição em JS moderno.
d) multiplica lança erro em tempo de execução; sub funciona.
Dica: diferença entre Function Declaration e Function Expression.

### 2) Sobre arrow function e operador this, julgue a afirmação a seguir:
“Arrow functions possuem seu próprio this e podem ser usadas como construtoras com new.” Explique e corrija se necessário.

Arrow functions não possuem seu próprio this. Elas herdam o this do contexto do escopo onde foram criadas.
Arrow functions não podem ser usadas como construtoras ja que elas não têm o método interno construtor

### 3) Sobre parâmetros default x null, no trecho:

    function calculaImposto(valor, taxa = 0.1) {
    return valor * taxa;
    }
    console.log(calculaImposto(100, undefined));
    console.log(calculaImposto(100, null));
Explique por que as saídas diferem e discuta a diferença entre valores falsy, null e undefined.

undefined → ativa o valor default (0.1) por não ser definido.
null → é usado literalmente, e null vira 0 em multiplicação.
Valores falsy não têm impacto no default parameter, apenas undefined tem.

### 4) Sobre IIFE e isolamento:
a) Mostre como uma IIFE evita poluir o escopo global.

Uma IIFE (Immediately Invoked Function Expression) cria um escopo próprio,
isolando variáveis para que elas não fiquem acessíveis no janela (navegador) ou no escopo global (Node).

b) Transforme o exemplo abaixo em IIFE e explique por que privateVariable não é acessível fora:

    let privateVariable = "x";
    console.log(privateVariable);

```
// Resposta
(function(a, b){
    let teste = "teste"
    console.log("Soma:", a + b);
})(3, 7);


(function(){
    let privateVariable = "x"
    console.log(privateVariable)
})();

console.log(privateVariable)
```


### 6) var, let, const e referência constante (discursiva curta)
Explique por que const não “congela” um array/objeto e mostre um exemplo seguro de atualização imutável de um array ou objeto.

Ele apenas impede reatribuição da variável. Ou seja, você não pode trocar o array/objeto por outro.
Mas pode alterar seu conteúdo interno, porque arrays e objetos são mutáveis por natureza em JavaScript.

Usando spread:

    const numeros = [1, 2, 3];
    const novos = [...numeros, 4]; // cria um novo array sem modificar o original
### 7) Sobre estruturas de repetição:
Qual a estrutura de laço de repetição, entre os listados abaixo, mais adequada para percorrer um objeto iterável, como um array?
a) for...in  
b) for...of `(Correta)`
c) while
d) for

### 8) Sobre seletores do DOM, marque a alternativa correta:
a) querySelectorAll retorna o primeiro elemento que casa com o seletor CSS.
b) querySelector retorna uma NodeList com todos os elementos.
c) `(Correta)` querySelector retorna o primeiro elemento; querySelectorAll retorna todos os elementos que casam.
d) getElementsByTagName recebe um seletor CSS complexo.

### 9) Sobre o atributo classList e o estilo camelCase, julgue o item a seguir:
“Para aplicar background-color via DOM usamos element.style['background-color'] = 'red'; não há convenção camelCase nesse caso.” Justifique e corrija, caso necessário.

No DOM, as propriedades CSS devem ser acessadas em camelCase, porque atributos com hífen não são válidos como identificadores JavaScript. 

    // Forma correta => element.style.backgroundColor = "red";

### 10) Sobre manipulação de DOM:
Complete as lacunas com os métodos corretos e escreva um código mínimo que: cria um `<li>`, adiciona texto e insere no final de uma `<ul id="lista">`:

Criar: document.`createElement`('li')

Inserir dentro de um elemento já selecionado: element.`appendChild`(child)

Remover um nó filho: parent.`removeChild`(child)

### 11) Qual opção associa corretamente um listener de clique a um botão?
a) button.on("clique", minhaFuncao)
b) button.click(minhaFuncao)
c) `(Correta)` button.addEventListener("click", minhaFuncao)
d) button.listen("click", minhaFuncao)  

### 12) Sobre callback de evento:
Explique as etapas de manipulação de eventos (seleção → binding → callback) e escreva um trecho de código que: seleciona #formLogin, previne o submit, valida que o campo #email não está vazio e adiciona/remove classe error a algum elemento da página.

Você seleciona o elemento do DOM que deve reagir ao evento.Conecta o evento ao elemento usando addEventListener. E a função que será executada quando o evento disparar.

```
const form = document.querySelector("#formLogin");
const emailInput = document.querySelector("#email");
const msg = document.querySelector("#msgErro");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (emailInput.value.trim() === "") {
        msg.classList.add("error");
        msg.textContent = "E-mail obrigatório!";
    } else {
        msg.classList.remove("error");
        msg.textContent = "";
    }
});
```
### 13) Sobre funções puras:
“Funções puras podem ler e alterar variáveis globais desde que retornem sempre o mesmo valor.” Avalie e justifique com um contraexemplo.

Funções puras não podem ler nem modificar estado global.
```
let contador = 0;

function soma(x) {
    contador++;      // altera variável global → efeito colateral
    return x + 1;
}

console.log(soma(10)); // 11
console.log(soma(10)); // 11 (mesmo resultado, mas continua impura!)

```

### 14) Sobre o conceito de imutabilidade:
Explique por que push em um array recebido por parâmetro pode introduzir efeitos colaterais. Reescreva adicionarItemImpuro(arr, item) de forma imutável usando spread.

Porque push() modifica o array original.

```
function adicionarItem(arr, item) {
    return [...arr, item];
}
```

### 15) Sobre First-class e Higher-order Functions:
Assinale a correta sobre funções anônimas e higher-order:
a) Funções anônimas não podem ser passadas como argumento.
b) `(Correta)` Higher-order é toda função que retorna outra função ou recebe função como argumento.
c) JS não trata funções como valores de primeira classe.
d) Callbacks não são funções.

### 16) Sobre métodos de iteração em arrays: Explique como funcionam os métodos de iteração em arrays em JavaScript: forEach(), map(), filter() e reduce().
`forEach()`: Executa uma função para cada elemento do array.
`map()`: Percorre o array e retorna um novo array com o resultado da uma função aplicada a cada item do array inicial.
`filter()`: Retorna um novo array contendo apenas os elementos que passam em uma condição.
`reduce()`: Reduz um array a um único valor (número, objeto, array, string e outros).

17) Sobre os métodos map / filter / reduce, dado o seguinte código:

```
const pedidos = [
  { cliente: "A", total: 100 },
  { cliente: "B", total: 200 },
  { cliente: "A", total: 50  },
  { cliente: "C", total: 350 }
];
```
a) Use map para obter apenas os totais.
    `const totais = pedidos.map(p => p.total);`
b) Use filter para pedidos ≥ 200.
    `const pedidosGrandes = pedidos.filter(p => p.total >= 200);`
c) Use reduce para somar todos os totais.
    `const somaTotais = pedidos.reduce((acc, p) => acc + p.total, 0);`

Explique por que o array original não é modificado.
Eles criam e retornam novos valores, baseados na função callback fornecida. Então eles não mudam o array o original.

### 18) Currying e aplicação parcial (complete e comente)
Implemente aplicarTaxa(t) que retorna uma função f(valor) somando a taxa; mostre aplicarICMS e aplicarIPI. Comente a relação entre currying e closures.

```
function aplicarTaxa(taxa) {
    return function(valor) {
        return valor + (valor * taxa);
    };
}

const aplicarICMS = aplicarTaxa(0.18);
const aplicarIPI  = aplicarTaxa(0.12);

// Exemplos:
console.log(aplicarICMS(100)); // 118
console.log(aplicarIPI(100));  // 112
```
Currying cria funções especializadas a partir de funções genéricas. Closures permitem que essas funções lembrem o valor passado anteriormente. aplicarTaxa guarda a taxa e cria funções novas como aplicarICMS e aplicarIPI.


### 19) Compose vs. Pipe (discursiva curta + código)
a) Explique composition (da direita para a esquerda) e pipe (da esquerda para a direita).
Composition: O fluxo de dados ocorre da direita para a esquerda. Normalmente, você lê a função mais próxima do dado (a mais à direita) como a que é executada primeiro.

Pipe: O fluxo de dados ocorre da esquerda para a direita. Você lê a primeira função como a que é executada primeiro, e cada função subsequente opera sobre o resultado da anterior.

b) Dadas `const somar1 = x => x+1 e const dup = x => x*2`, escreva compose e pipe que resultem em 12 a partir de 5.
```
const compose = (f, g) => x => f(g(x));

console.log(compose(dup, somar1)(5)); // dup(somar1(5)) = dup(6) = 12
``` 
```
const pipe = (f, g) => x => g(f(x));

console.log(pipe(somar1, dup)(5)); // dup(somar1(5)) = 12

```

### 20) Sobre Lazy evaluation:
Explique o conceito de lazy evaluation e comente sobre como essa técnica é empregada, bem como qual a sua vantagem, com base no trecho de código a seguir:

Lazy evaluation (avaliação preguiçosa) é quando um valor só é calculado quando necessário, e não antes. Ou seja, você cria uma estrutura, mas ele não é executado imediatamente.

```
function lazyMap(arr, fn){
  return { get: i => fn(arr[i]), size: () => arr.length };
}

// Exemplo de utilização
const values = [129.9, 99.5, 24.69, 54.65];

const valuesWithDiscount = lazyMap(values, (value) => value * (1 - 0.1));

console.log(valuesWithDiscount.get(0));
```
Ele aplica fn em um elemento do array quando chamado. Ele devolve um objeto com um método get(i) que:
Só quando chamado → aplica fn ao elemento arr[i].

### 21) Sobre Closures:
Dado um contador que vaza estado global, reescreva-o com closure garantindo “estado privado” entre chamadas. Explique a frase “o ambiente léxico é lembrado”, no contexto de closure functions.

Código antes da refatoração:

```
// Estado global exposto (vaza para todo o app)
let count = 0;

function increment() {
  count++; // muta o estado global
}

function getCount() {
    return count; // lê estado global
}
```
```
// Resposta
function criarContador() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const contador = criarContador();

contador.increment();
console.log(contador.getCount()); // 1
```

### 25) Subprogramas e propriedades
Analise afirmações clássicas sobre subprogramas/funções (ponto único de entrada, passagem de parâmetros, etc.) e marque a alternativa correta.
a) Subprogramas não podem retornar múltiplos valores.
b) Subprogramas aumentam o acoplamento do código.
c) `(Correta)` Subprogramas facilitam a reutilização e manutenção do código.
d) Subprogramas não podem ser aninhados em JS.

### 26) Sobre paradigmas imperativo vs. funcional:
Compare “dizer como fazer” (imperativo) vs. “dizer o que fazer” (declarativo/funcional) usando o problema do fatorial como fio condutor. Em seguida, proponha um critério para quando preferir reduce a for.

Como fazer: Focado em passo a passo, loops, mutação. Você descreve o procedimento.
O que fazer: Focado em expressar transformações, não passos. Usa recursão, reduce, funções puras, sem mutação.

### 27) PROGEPE-UFRPE - 2022 - Técnico (UFRPE)/Tecnologia da Informação/Desenvolvimento de Sistemas
Sobre a linguagem de programação JavaScript, assinale a afirmativa correta.

a) É uma linguagem utilizada exclusivamente no lado do cliente (client-side) para manipular páginas web.
b) É uma linguagem fortemente tipada, o que significa que todas as variáveis precisam ser declaradas com um tipo.
c) `(Correta)` Suporta programação orientada a objetos, funcional e imperativa, permitindo múltiplos paradigmas.
d) Assim como em Java, programas escritos em JavaScript só são executados em computadores que tenham a máquina virtual JSVM, instalada e em execução.

#### 28) FGV - 2024 - Analista Judiciário (TJ AP)/Apoio Especializado/Tecnologia da Informação Banco de Dados.

No contexto do JavaScript, analise o quadro a seguir sob a ótica das diferenças sintáticas utilizadas nas declarações de variáveis, e as respectivas possibilidades de redeclarar e/ou alterar o valor de uma variável ao longo do código.

    Tipo de declaração	Possibilidade de redeclaração	Possibilidade de alteração do valor
    ?                              	Sim	                              Sim
    ?	                            Não	                              Sim
    ?                           	Não	                              Não
De cima para baixo, a ordem de preenchimento da primeira coluna, de acordo com as possibilidades de cada tipo de declaração, é:

a) `(Correta)` var, let, const
b) let, var, const
c) const, let, var
d) var, const, let

### 29) Instituto Verbena - 2024 - Engenheiro (Pref Rio Branco)/Software
Elixir é uma linguagem de programação funcional de propósito geral criada pelo brasileiro José Valim. Elixir executa na máquina virtual Erlang e permite a criação de aplicações distribuídas e tolerantes a falhas. No que tange ao paradigma funcional, algumas características são específicas das linguagens que implementam este paradigma, tais como:

a) variáveis definidas fora da função têm valor imutável fora daquele escopo.
b) atributos são encapsuláveis via modificadores definidos nas classes.
c) é desejado que funções possam alterar o estado de variáveis globais.
d) `(Correta)` dão suporte a funções de ordem superior e funções de primeira classe.

### 30) IMPARH - 2025 - Auditor de Controle Interno (CGM Fortaleza)/Tecnologia da Informação/Área 2

Sobre conceitos relacionados ao JavaScript, analise as afirmações abaixo e marque a opção que indica a quantidade correta de afirmações verdadeiras e falsas.

I. JavaScript suporta orientação a objetos, permitindo a criação de classes, herança, encapsulamento e polimorfismo.
II. JavaScript suporta programação funcional, incluindo o uso de funções de alta ordem como map, filter e reduce.
III. Em JavaScript, todas as variáveis declaradas dentro de uma função são automaticamente globais e podem ser acessadas em qualquer parte do código.
IV. O uso de ponto e vírgula `(;)` ao final de cada linha é obrigatório em JavaScript para indicar o final de uma instrução.

a) `(Correta)` 2 verdadeiras e 2 falsas.
b) 3 verdadeiras e 1 falsa.
c) 4 verdadeiras e 0 falsas.
d) 1 verdadeira e 3 falsas.

