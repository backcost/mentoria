// 6. Crie um array com datas de quando você foi à academia 
// ou fez atividade fisica. Crie uma função para verficar se 
// dado um array de datas, você fez atividade física nos ultimos sete dias.


// Entrada => array com datas q vc fez atividade física
// Processamento =>
// 1. função para ver quantos dias tem entre data desejada e hoje
// 2. função para saber se o retorno da função anterior é menor ou igual
// que sete.
// Saída => Dizer se fez ou não atividade física nos últimos sete dias


const daysBetweenBR = (DateBR) => {
    var dayMiliSeconds = 24 * 60 * 60 * 1000
    var dateMMDD = new Date(`${DateBR[3]}${DateBR[4]}/${DateBR[0]}${DateBR[1]}/${DateBR[6]}${DateBR[7]}${DateBR[8]}${DateBR[9]}`)
    var today = new Date()

    var days = parseInt((today - dateMMDD) / dayMiliSeconds)
    return days
}

const intheLastSevenDays = (datesArray) => {
    for (let date of datesArray) {
        if (daysBetweenBR(date) <= 7) {
            return `Você fez atividade física nos últimos 7 dias`
        }
    }
    return `Você NÃO fez atividade física nos últimos 7 dias`
}


const physicalActivities = ['14/02/2021', '13/02/2021', '12/02/2021',
                            '11/02/2021', '10/02/2021', '09/02/2021',
                            '08/02/2021', '07/02/2021', '06/02/2021']

console.log(intheLastSevenDays(physicalActivities))
