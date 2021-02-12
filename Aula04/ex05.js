// 7 – Peça para o usuário digitar uma data. 
// Exiba separadamente o dia, o mês e o ano.

// Entrada => data
// Processamento =>
// 1. localizar barra
// Saída => data separada (dd, mm, aaaa)


const readlineSync = require('readline-sync')

let input = readlineSync.question('Digite uma data: ')

console.log(`Dia ${}; Mês ${}; Ano ${}`)
