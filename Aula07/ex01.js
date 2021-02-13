// 1. Crie um objeto de data com a data de hoje
const readlineSync = require('readline-sync')
while(true) {
    let foodCode = readlineSync.question('Digite o codigo do produto ou "Fim" para encerrar: ').toLowerCase()
    if (foodCode === 'fim') {
        break
    }
    let amount = readlineSync.question('Digite a quantidade: ')
    console.log(foodCode)
    console.log(amount)
}