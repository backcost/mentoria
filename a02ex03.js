// 03. Crie um script que pergunte 3 números ao usuário, 
// coloque em um array, depois exiba tal array. 
// Modifique os elementos do array de modo a a sequência
// de números ficar do contrário.


// Entrada => readlineSync para inserir 3 números
// Processamento =>
// 1. Criar função
// 2. Criar array sorted para colocar os números em ordem
// Saída => array invertido


let readlineSync = require('readline-sync')

let run = true
let grades = []

while(run) {
    let input = Number(readlineSync.question('Digite uma nota: '))
    
    if (input === 'fim') {
        run = false
    } 
    grades.push(input)
}
console.log(grades)


console.log(sort([1,2,3]))
console.log(sort([1,3,2]))
console.log(sort([2,1,3]))
console.log(sort([2,3,1]))
console.log(sort([3,1,2]))
console.log(sort([3,2,1]))
console.log(sort([1,1,1]))
console.log(sort([1,2,2]))
console.log(sort([2,1,1]))
console.log(sort([1,1,2]))
console.log(sort([2,2,1]))
