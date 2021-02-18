// 4.  Encontre o número de dias entre hoje e 1 de Janeiro de 2017.


// Entrada => data de hoje e data desejada
// Processamento =>
// 1. Colocar data de hoje e data desejada em variaveis
// 2. Subtrair data de hoje pela data desejada
// Saída => número de dias entre hoje e a data desejada


var oneDayMiliSeconds = 24*60*60*1000
var today = new Date()
var past = new Date("02/17/2021")
var days = parseInt((today - past)/(oneDayMiliSeconds))

console.log(`Já se passaram ${days} dias desde 01/01/2017;`)
