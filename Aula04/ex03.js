// 3 – Peça ao usuário para digitar 5 números. 
// Verifique qual é o maior número e exiba-o.


// Entrada => readlineSync para o usuário digitar 5 números
// Processamento =>
// 1. for para repetir o readluneSync
// 2. dentro do for colocar condicional para ver qual o maior
// Saída => mostrar o maior número


let readlineSync = require('readline-sync')


for(let count = 1;count < 6;count++) {
    let input = readlineSync.question(`Digite o ${count} numero: `)
    if (count === 1) {
        largest =input
    } if (input > largest) {
        largest = input
    }
}
console.log(`O maior número digitado foi o ${largest}!`)
