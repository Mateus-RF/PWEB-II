### 🚨❓ Questão 01 - O que precisamos fazer para adicionar um script na seção <head> de uma página HTML e definir que ele só deve ser executado ao finalizar o carregamento da página?
Usar o parametro `defer` para o navegador carregar o script, mas só executá-lo depois que o HTML inteiro for carregado.
### 🚨❓ Questão 02 - Considere os métodos de seleção de elementos do DOM (Document Object Model) em JavaScript listados abaixo. Relacione cada método à definição correta.

B) I. document.getElementById() 

C) II. document.querySelector()

A) III. document.getElementsByTagName()

A. Retorna todos os elementos do DOM que possuem o mesmo nome de tag especificado.

B. Retorna um único elemento do DOM com base no valor do atributo id.

C. Retorna o primeiro elemento do DOM que corresponde ao seletor CSS especificado.

### 🚨❓ Questão 03 - Qual método foi utilizado para adicionar a classe input-erro ao campo de entrada no trecho acima? O que é esse atributo classList?
O método usado foi `classList.add()`. Ele adiciona uma classe CSS ao elemento neste caso, `input-erro` ao `campoEntrada`.
O `classList` é uma propriedade dos elementos HTML que permite manipular as classes.

### 🚨❓ Questão 04 - O que o método `createElement()` faz e que informação ele precisa receber como argumento?
O método `createElement()` cria um novo elemento HTML pelo JavaScript.

### 🚨❓ Questão 05 - Em JavaScript, ao manipular elementos do DOM, os atributos innerText e innerHTML são frequentemente utilizados. Qual das alternativas abaixo descreve corretamente a diferença entre esses dois atributos?

a — innerText somente exibe o conteúdo HTML do elemento, enquanto innerHTML somente exibe o texto visível ao usuário.
b —✅ innerText retorna ou define apenas o texto visível ao usuário, enquanto innerHTML retorna ou define o conteúdo HTML do elemento, incluindo tags.
c — innerText é utilizado apenas para leitura, enquanto innerHTML pode ser utilizado tanto para leitura quanto para modificação do conteúdo do elemento.
d — Ambos os atributos são sinônimos e podem ser usados de forma intercambiável para manipular texto e HTML.

### 🚨❓ Questão 06 - O evento de clique foi definido de que forma para os elementos span e btnExcluir (qual atributo foi usado e o que precisamos passar para esse atributo)?
O evento de clique foi definido usando o atributo `onclick`. Para esse atributo, passamos uma função que será executada quando o elemento for clicado.

### 🚨❓ Questão 07 - Os manipuladores dos eventos de clique no botão de adicionar e pressionamento da tecla enter foram definidos de forma diferente agora, usando o método addEventListener(). Explique o funcionamento desse método e o que ele precisa receber como parâmetro.
O método `addEventListener()` serve para associar um evento específico a um elemento HTML. Ele precisa receber dois parâmetros principais:

1.O nome do evento (como "click", "submit", "keydown", etc.);
2.A função que será executada quando esse evento acontecer.