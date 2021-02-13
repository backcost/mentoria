// 8. O cardápio de uma casa de lanches é dado pela tabela abaixo:
// Escreva um algoritmo que leia o código do item adquirido pelo 
// consumidor e a quantidade, calculando e mostrando o valor a pagar. 
// Não será necessário exibir o produto e o valor, somente o valor 
// final. O usuário pode fazer um pedido com qualquer número de itens. 
// O usuário digita "Fim" para encerrar a entrada de itens.
// Ex: 2 cocas e 1 bauru com ovo.


// Entrada => 1. Código do item 
// 2. Quantidade
// Processamento =>
// Saída =>


const find = (array, code) => {
    for(let count = 0; count < array.length;count++){
        if (array[count][0] == code) {
            return array[count][1]
        }
    }
    return 'Esse código não existe. Tente novamente.'
}

const readlineSync = require('readline-sync')
const prices = [[001, 10], [002, 20], [003, 5], [004, 8], [005, 2]]
let total = 0

while(true) {
    let foodCode = readlineSync.question('Digite o codigo do produto ou "Fim" para encerrar: ').toLowerCase()
    if (foodCode === 'fim') {
        break
    }
    let amount = readlineSync.question('Digite a quantidade: ')
    total += amount * find(prices,foodCode)
}
console.log(`Valor Total: R$${total}`)
