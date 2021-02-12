// 5 – Crie um programa que entre com os dados de altura 
// e sexo de 5 pessoas. Imprima na tela quantas pessoas 
// são do sexo masculino e quantas pessoas são do sexo 
// feminino. Mostre também qual é a maior altura e se essa 
// altura é de um homem ou uma mulher.


// Entrada => altura e sexo de 5 pessoas
// Processamento =>
// 1. Separar dia, mês e ano
// Saída => print 


const readlineSync = require('readline-sync')

let input = readlineSync.question('Digite uma data (dd/mm/aaaa): ')
day = input[0] + input[1]
month = input[3] + input[4]
year = input[6] + input[7] + input[8] + input[9]

console.log(`Dia ${day}; Mês ${month}; Ano ${year}`)
