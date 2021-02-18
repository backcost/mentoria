// 9. Crie uma função que retorne o nome do mês de uma data. 
// Ex: "10-01-2020" retornaria "Janeiro".


// Entrada => data
// Saída => o nome do mês dessa data


const fullMonthName = (date) => {
    const months = ["Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"]
    var date = new Date(date)
    var month = date.getMonth()

    return months[month]
}

console.log(fullMonthName("01/18/2021"))

//Solução do Marcos

//const brDate = "10/01/2020";

//console.log(monthName(brDate));

//function monthName(date) {
    //const [day, month, year] = date.split("/");
    //const usDate = new Date(year, month-1, day);

    //return usDate.toLocaleString('pt-BR', {month: 'long'});
//}
