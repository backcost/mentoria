// 1 – Calcule a média de diversas notas digitadas pelo usuário. 
// O número de notas pode variar. O usuário vai usar o comando 
// "fim" para dizer quando as notas acabaram e o calculo da média 
// pode ser feita.


// Entrada => n notas
// Processamento =>
// 1. readlineSync para receber notas
// 2. Criar variaveis para somar as notas e para contar
// 3. Usar o while
// Saída => média das notas

let readlineSync = require('readline-sync')

let run = true
let sum = 0
let c = 0

while(run) {
    let input = readlineSync.question('Digite uma nota: ')
    
    if (input === 'fim') {
        run = false
        break
    } 
    sum += Number(input)
    c++
}


console.log(`A media das notas inseridas é ${sum/c}.`)
