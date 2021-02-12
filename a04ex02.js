// 2 – Faça um programa que peça números e imprima o quadrado de cada número.

// Entrada => n números
// Processamento =>
// 1. readlineSync para receber números
// 2. Usar o while para mostrar o quadrado
// Saída => quadrado de cada número

let readlineSync = require('readline-sync')

let run = true

while(run) {
    let input = readlineSync.question('Digite um numero: ')
    
    if (input === 'fim') {
        run = false
        break
    } 
    console.log(`O quadrado de ${input} é ${input**2}.`)
}
