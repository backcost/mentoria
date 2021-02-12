// 7 – Peça para o usuário digitar uma data. 
// Exiba separadamente o dia, o mês e o ano.

// Entrada => data
// Processamento =>
// 1. Separar dia, mês e ano
// Saída => data separada (dd, mm, aaaa)


const readlineSync = require('readline-sync')

let input = readlineSync.question('Digite uma data (dd/mm/aaaa): ')
day = input[0] + input[1]
month = input[3] + input[4]
year = input[6] + input[7] + input[8] + input[9]

console.log(`Dia ${day}; Mês ${month}; Ano ${year}`)
