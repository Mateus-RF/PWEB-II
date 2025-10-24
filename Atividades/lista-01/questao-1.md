
## 1ª Questão
### A:
As linguagens de tipagem estática são caracterizadas por terem a verificação de tipos das variáveis e expressões realizada primariamente em tempo de compilação, e não em tempo de execução.
### B: 
Em termos de segurança visualiza-se a detecção precoce de erros de tipo, consistência dos tipos em todo o programa, A declaração explícita dos tipos (ou a inferência) funciona como uma forma de documentação.
Em termos de performance como os tipos são fixos e conhecidos, o compilador pode gerar código de máquina mais eficiente. Menor custo em tempo de execução e alocações de memória mais rápidas e eficientes.
### C: 
Em linguagens de tipagem dinâmica, a verificação de tipos não ocorre no momento da compilação, mas sim durante a execução do programa.
O interpretador precisa checar tipos a cada operação, o que aumenta o tempo de execução. Como os tipos não são conhecidos antes da execução, o compilador não consegue gerar código altamente otimizado. Armazenar metadados sobre o tipo de cada objeto exige mais memória.
### D:
Define quando a verificação de tipos acontece (compilação vs. execução). Definir quão rigorosa a linguagem é com as regras de tipos, especialmente sobre conversões automáticas.
### E:
O princípio fundamental é: o sistema de tipos é estático, mas possui um tipo especial que se comporta de maneira dinâmica. Linguagens como TypeScript , Dart , C# e Python com Type Hints possuem um tipo específico que representa uma variável cuja verificação será adiada para o tempo de execução.
Quando você declara uma variável como esse tipo, o verificador de tipos estático "desliga" suas checagens para ela. O compilador assume que qualquer operação que você fizer com essa variável é válida.
No entanto, em tempo de execução, o sistema tenta resolver a operação. Se falhar, um erro de tipo é lançado, exatamente como em uma linguagem dinâmica.
### F: 
O tipo de uma variável é determinado em tempo de execução e pode mudar ao longo do programa. O JavaScript faz conversões automáticas de tipos quando necessário, o que pode gerar resultados inesperados.