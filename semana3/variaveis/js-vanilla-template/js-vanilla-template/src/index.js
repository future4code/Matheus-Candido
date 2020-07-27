//INTERPRETAÇÂO DE ESCRITA

//1. Será impresso no console // 10
//2. Será impresso no console // undefined, 10


//ESCRITA DE CÓDIGO

//1.

//a
 const nome = ("")

// let idade

//c
 console.log(typeof nome, idade)

//d - Porque para usar 'cont' tem que por o sinal de atribuição = e ("") assim ele identifica que é uma string
//d - Como não foi definido um número para para variável ele voltou como resultado "undefined" justamente por não ter definido valor

//d
 const nome = prompt("Qual o seu nome")
 let idade = prompt("Qual sua idade")

//e
 console.log(typeof nome, idade)
 Notei que ao pedir o tipo de variavel, ele me deu como resultado que tanto a idade quanto o nome são strings

//f
 console.log("Olá", nome,",", "você tem", idade, "anos")


//2.

  let um = prompt("1. Qual sua comida preferida?")
  console.log("1. Qual sua comida preferida?")
  console.log("R:", um)

  let dois = prompt("2. Gosta de gatos?")
  console.log("2. Gosta de gatos?")
  console.log("R:", dois)

  let tres = prompt("3. Gosta de suco?")
  console.log("3. Gosta de suco?")
  console.log("R:", tres)

  let quatro = prompt("4. Qual gênero musical você gosta?")
  console.log("4. Qual gênero musical você gosta?")
  console.log("R:", quatro)

  let cinco = prompt("5. Qual seu endereço?")
  console.log("5. Qual seu endereço?")
  console.log("R:", cinco)


//3.

 let favoriteFoods = ['Pão de Queijo', 'Pizza', 'Lasanha', 'Sorvete', 'Strogonoff']

//a
 console.log(favoriteFoods)

//b
 console.log("Essas são as minhas comidas preferidas:")
 console.log(favoriteFoods[0])
 console.log(favoriteFoods[1])
 console.log(favoriteFoods[2])
 console.log(favoriteFoods[3])
 console.log(favoriteFoods[4])

//c = Desafio
 let yourFavoriteFood = prompt("Qual sua comida favorita?")
 favoriteFoods[1] = (yourFavoriteFood)
 console.log(favoriteFoods[0])
 console.log(favoriteFoods[1])
 console.log(favoriteFoods[2])
 console.log(favoriteFoods[3])
 console.log(favoriteFoods[4])
 

//4. 

 let perguntas = ['Gosta de rock?', 'Gosta de brócolis?', 'Odeia pássaros?']

//a
 let respostas = [true,true,false]

//b
 console.log(perguntas[0],respostas[0])
 console.log(perguntas[1],respostas[1])
 console.log(perguntas[2],respostas[2])