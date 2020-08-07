// - - - - - - - LISTA DE EXERCÍCIOS - - - - - - - //


// // EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO // //

//1
/*É criado uma função com o argumento "valorEmDolar".
Dentro desta função é criada uma constante onde ele pede ao usuário o valor da cotação e e já converte de String para Number,
e retorna "R$" junto com o argumento da função vezes o valor da cotação digitada pelo usuário.
Abaixo da função é criada uma constante chamada "meuDinheiro" que recebe a função acima e define o argumento da função, que no caso é 100.

Ele pede um console log dessa constante "meuDinheiro" que vai imprimir no console o valor convertido,
no caso o valor do usuario vezes 100 dando o resultado em reais. */


//2
/*Cria uma função "investeDinheiro" com dois argumentos. Dentro da função é cirado uma variável "valorAposInvestimento",
abaixo tem um switch case para a condição do primeiro arguumento da função "tipoDeInvestimento", onde cada case seria um tipo de investimento e
se o tipo for imgual ele executa o comando, que seria básicamente o mesmo em todos os cases,
onde a variável "valorAposInvestimento" é igual ao segundo argumento da função "valor" vezes o valor de cada tipo de inveztimento(apenas esse vária em cada case).

Se o tipo for diferente dos cases, mostra na tela um alert dizendo que o tipo está incorreto.
Um dos cases sendo true ele retorna o novo valor da variável "valorAposInvestimento" e saindo da função. Abaixo da função é criado duas constantes,
a primeira "novoMontsnte" recebe a função e define o primeiro argumento como "ações" e o segundo como 150.
a segunda "segundoMontante" também recebe a função mas o primeiro argumento é "Tesouro Direto" e o segundo como 200.

Ele pede um console log da primeira constante, como o primeiro argumento é verdadeiro ele executa a ação onde faz 150 vezes 1.1 imprimindo o resultado.
Ele pede um console log da segunda constante, mas como o primeiro argumento é false ele irá imprimir um alerta "TIPO DE INVESTIMENTO INFORMADO INCORRETO!" */


//3
/*Ele cria três constantes de array com os seguintes nomes:
"numeros" - dentro desse array há pelo menos 14 "numeros".
"arra1" e "array2" - ambos vazios.

abaixo tem um laço onde ele cria uma variável "numero" para a array de "numeros"(logo se eu falar da variável "numero" dentro desse laço, se trata da array numeros)
e executa o seguinte laço com as seguintes condições: se a sobra por dois de "numero" for igual a zero ele inclui esse número dentro do array1,
agora se a sobra por dois de "numero" não for igual a zero, ele inclui esse número dentro do array2.

Ele pede três console log:
Primeiro - imprime "Quantidade total de números" e a aquantidade de números dentro do array "numeros" que será 14
Segundo - imprime a quantidade de números dentro do array1 que será 6
Terceiro - imprime a quantidade de números dentro do array2 que será 8 */


//4

/*Cria uma constante "numeros" contendo 25 números(positivos e negativos) dentro do array.
Cria uma variável "numero1" com valor infinity, e outra chamada "numero2" com valor zero.

Tem um laço onde é criado uma variável "numero" para a array numeros(logo se eu falar da variável "numero" dentro desse laço, se trata da array numeros) com duas condiçoes dentro do laço que são executados ao memso tempo por serem dois if,
onde o primeiro if verifica se "numero" é menor que o array "numero1", se for ele diz que numero1 é igual a "numero",
e o segundo if verifica se o "numero" é maior que o array "numero2", se for ele diz que "numero2" é igual a "numero" 

Dois console log:
Primeiro - imprime o array "numero1" que vai ter como valor o mesmo valor da array "numeros"
Segundo - imprime o array "numero2" que vai ter como valor o mesmo valor da array "numeros" porém sem o -10 pois ele é menor que 0 e não passou na condição */

