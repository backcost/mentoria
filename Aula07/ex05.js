// 5. Cria uma função que retorne o número de dias entre duas datas.


// Entrada => data inicial e data final
// Processamento =>
// 1. Colocar data inicial e data final em variaveis
// 2. Transformar datas para milissegundos
// 3. Subtrair data inicial pela data desejada
// 4. Dividir pelo total de milissegundos de um dia
// Saída => número de dias entre as datas

// mm/dd/aaaa
const daysBetween = (firstDate, secondDate) => {
    var oneDayMiliSeconds = 24*60*60*1000
    var firstMiliSeconds = Date.parse(new Date(firstDate))
    var secondMiliSeconds = Date.parse(new Date(secondDate))

    var days = ((secondMiliSeconds - firstMiliSeconds)/(oneDayMiliSeconds))
    
    return days
}

console.log(daysBetween("02/12/2021","02/14/2021"))
console.log(daysBetween("02/13/2021","02/14/2021"))
console.log(daysBetween("05/14/1995","02/14/2021"))

// dd/mm/aaaa
const daysBetweenBR = (firstDateBR, secondDateBR) => {
    var firstDateMMDD = `${firstDateBR[3]}${firstDateBR[4]}/${firstDateBR[0]}${firstDateBR[1]}/${firstDateBR[6]}${firstDateBR[7]}${firstDateBR[8]}${firstDateBR[9]}`
    var secondDateMMDD = `${secondDateBR[3]}${secondDateBR[4]}/${secondDateBR[0]}${secondDateBR[1]}/${secondDateBR[6]}${secondDateBR[7]}${secondDateBR[8]}${secondDateBR[9]}`

    var oneDayMiliSeconds = 24*60*60*1000
    var firstMiliSeconds = Date.parse(new Date(firstDateMMDD))
    var secondMiliSeconds = Date.parse(new Date(secondDateMMDD))

    var days = ((secondMiliSeconds - firstMiliSeconds)/(oneDayMiliSeconds))
    
    return days
}

console.log(daysBetweenBR("12/02/2021","14/02/2021"))
console.log(daysBetweenBR("13/02/2021","14/02/2021"))
console.log(daysBetweenBR("14/05/1995","14/02/2021"))
