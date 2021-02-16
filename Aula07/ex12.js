// 12. Crie uma função que receba um array de datas e 
// retorne a maior data.

// Entrada => array
// Processamento => 1. for para analisar tudo do array
// Saída => maior data do array


const biggestDate = (array) => {
    biggest = null
    for(let day of array) {
        if (Date.parse(day) > biggest) {
            biggest = Date.parse(day)
        }
    }
    return new Date(biggest)
}


dates = ["01/02/2021",
        "02/03/2021",
        "03/10/2021",
        "01/15/2021",
        "01/20/2021",
        "01/30/2021",]
console.log(biggestDate(dates))
