/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const carta = comprarCarta();
const carta1 = comprarCarta();
const carta2 = comprarCarta();
const carta3 = comprarCarta();

console.log(`Bem vindo ao jogo de Blackjack!`)

if (confirm(`Quer iniciar uma nova partida?`)) {
   comprarCarta = (`Usuário - cartas: ${carta.texto} ${carta1.texto} - pontuação ${carta.valor + carta1.valor}`)
   comprarCarta = (`Computador - cartas: ${carta2.texto} ${carta3.texto} - pontuação ${carta2.valor + carta3.valor}`)
   if (carta.valor + carta1.valor > 21) {
      alert(`Suas cartas são ${carta.texto} ${carta1.texto}a sua pontuação é ${carta.valor + carta1.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO computador ganhou!`)
   }
   else if (carta.valor + carta1.valor === 21) {
      alert(`Suas cartas são ${carta.texto} ${carta1.texto}a sua pontuação é ${carta.valor + carta1.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO usuário ganhou!`)

   }
   else if (carta2.valor + carta3.valor > 21) {
      alert(`Suas cartas são ${carta.texto} ${carta1.texto} a sua pontuação é ${carta.valor + carta1.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO usuário ganhou!`)
   }
   else if (carta2.valor + carta3.valor === 21) {
      alert(`Suas cartas são ${carta.texto} ${carta1.texto}a sua pontuação é ${carta.valor + carta1.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO computaodr ganhou!`)

   }
   else if (confirm(`Suas cartas são ${carta.texto} ${carta1.texto}. A carta do computador é ${carta2.texto}.\nDeseja comprar mais carta?`)) {
      if (carta.valor, carta1.valor, carta2.valor, carta3.valor === "A") {
         console.log(`Usuário - cartas: ${carta.texto} ${carta1.texto} - pontuação ${carta.valor + carta1.valor}`)
         console.log(`Computador - cartas: ${carta2.texto} ${carta3.texto} - pontuação ${carta2.valor + carta3.valor}`)
      }
      else if (carta.valor + carta1.valor + carta3.valor > 21) {
         alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do usuário é ${carta2.valor + carta3.valor}.\nO computador ganhou!`)

      }
      else if (carta.valor + carta1.valor + carta3.valor === 21) {
         alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do usuário é ${carta2.valor + carta3.valor}.\nO usuário ganhou!`)

      }
      else if (carta2.valor + carta3.valor > 21) {
         alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO usuário ganhou!`)
      }
      else if (carta2.valor + carta3.valor === 21) {
         alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO computador ganhou!`)
      }
      else if (confirm(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A carta do computador é ${carta2.texto}.\nDeseja comprar mais carta?`)) {
         if (carta.valor + carta1.valor + carta3.valor > 21) {
            alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do usuário é ${carta2.valor + carta3.valor}.\nO computador ganhou!`)

         }
         else if (carta.valor + carta1.valor + carta3.valor === 21) {
            alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do usuário é ${carta2.valor + carta3.valor}.\nO usuário ganhou!`)

         }
         else if (carta2.valor + carta3.valor > 21) {
            alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO usuário ganhou!`)
         }
         else if (carta2.valor + carta3.valor === 21) {
            alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO computador ganhou!`)
         }
      }
      else if (carta.valor + carta1.valor + carta3.valor > carta2.valor + carta3.valor) {
         alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do usuário é ${carta2.valor + carta3.valor}.\nO usuário ganhou!`)
      }
      else if (carta.valor + carta1.valor + carta3.valor < carta2.valor + carta3.valor) {
         alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO computador ganhou!`)
      }
      else if (carta.valor + carta1.valor + carta3.valor === carta2.valor + carta3.valor) {
         alert(`Suas cartas são ${carta.texto} ${carta1.texto} ${carta3.texto}. A sua pontuação é ${carta.valor + carta1.valor + carta3.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nEmpate!`)
      }
   }
   else if (carta.valor + carta1.valor <= 21) {
      let jogoAcabou = false
      if (jogoAcabou) {
         for (let i = 0; i < carta.valor + carta1.valor; i++) {
            const element = jogoAcabou[i]
            carta.valor++
            break
         } alert(`Suas cartas são ${carta.texto} ${carta1.texto}a sua pontuação é ${carta.valor + carta1.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO computaodr ganhou!`)

      }
      else if (!jogoAcabou) {
         for (let i = 0; i < carta.valor + carta1.valor; i++) {
            const element = jogoAcabou[i]
            carta.valor++
            break
         } alert(`Suas cartas são ${carta.texto} ${carta1.texto}a sua pontuação é ${carta.valor + carta1.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO computaodr ganhou!`)

      }
   }
   else if (carta.valor + carta1.valor > carta2.valor + carta3.valor) {
      alert(`Suas cartas são ${carta.texto} ${carta1.texto}. A sua pontuação é ${carta.valor + carta1.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do usuário é ${carta2.valor + carta3.valor}.\nO usuário ganhou!`)
   }
   else if (carta.valor + carta1.valor < carta2.valor + carta3.valor) {
      alert(`Suas cartas são ${carta.texto} ${carta1.texto}. A sua pontuação é ${carta.valor + carta1.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nO computador ganhou!`)
   }
   else {
      alert(`Suas cartas são ${carta.texto} ${carta1.texto}. A sua pontuação é ${carta.valor + carta1.valor}.\nAs cartas do computador são ${carta2.texto} ${carta3.texto}. A pontuação do computador é ${carta2.valor + carta3.valor}.\nEmpate!`)
   }
}
else {
   console.log(`O jogo acabou`)
}