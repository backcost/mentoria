// 8. Crie uma função que retorne o número de dias dado o número 
// (não o indice) do mês.


// Entrada => mês e ano
// Saída => número de dias desse mês


const lastDayoftheMonth = (year, month) => {
    var date = new Date(year, month, 0)
    return date.getDate()
}

console.log(lastDayoftheMonth(2020,2))
