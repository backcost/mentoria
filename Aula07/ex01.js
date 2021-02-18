// 1. Crie um objeto de data com a data de hoje

// Entrada => 
// Processamento => Passar o dia d hoje do UTC para BRST
// Saída => Data de hoje horário de Brasília

var todayMiliSecondsBRST = Date.parse(new Date()) - 3*60*60*1000

console.log(new Date(todayMiliSecondsBRST))

// Marcle
// var today = new Date()
// var dateBR = today.toString()

// console.log(dateBR)