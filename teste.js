var DayMiliSeconds = 24*60*60*1000
var today = new Date()
var past = new Date(2017, 1, 1)
var difference = today.getTime() - past.getTime()
console.log(today.getTime())
console.log(Date.parse(today))
console.log(past.getTime())
console.log(Date.parse(past))
console.log((Date.parse(today)-Date.parse(past))/DayMiliSeconds)
var days =Math.floor(difference/DayMiliSeconds)

console.log(days)

var past2 = new Date("01/01/2017")
var difference2 = today.getTime() - past2.getTime()
var days2 =Math.floor(difference2/DayMiliSeconds)
console.log()
console.log(past2.getTime())
console.log(days2)

// Bom dia, Marcle! No ex04 da aula 7 q vc fez hj tem um erro: o resultado deu 1478, mas era pra ser retornado 1509