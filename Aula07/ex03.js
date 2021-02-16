// 3. Crie uma função para verificar se uma data inserida 
// pela usuário é uma data válida. Dado a entrada do usuário 
// você deve dizer se ela é uma data válida ou não.


// Entrada => 
// Processamento => Passar o dia d hoje do UTC para BRST
// Saída => Data de hoje horário de Brasília

const daysBetweenBR = (DateBR) => {
    var dayMiliSeconds = 24 * 60 * 60 * 1000
    var dateMMDD = new Date(`${DateBR[3]}${DateBR[4]}/${DateBR[0]}${DateBR[1]}/${DateBR[6]}${DateBR[7]}${DateBR[8]}${DateBR[9]}`)
    var today = new Date()
    console.log(dateMMDD)
    console.log(today)

    var days = (((today - dateMMDD) / dayMiliSeconds)+0.2).toPrecision(1)
    console.log(((today - dateMMDD) / dayMiliSeconds)+0.2)

    return days
}
console.log(daysBetweenBR('14/02/2021'))