// 13. Crie uma função que calcule a idade de uma pessoa 
// dado o dia do seu nascimento.


// Entrada => dia do nascimento
// Processamento => 1. Subtrair 
// Saída => idade


const age = (birthdate) => {
    var yearMiliSeconds = 365.25*24*60*60*1000
    var today = new Date("02/29/2020")
    var birthdateUTC = new Date(birthdate)
    console.log((today - birthdateUTC)/yearMiliSeconds)
    let age = parseInt((today - birthdateUTC)/yearMiliSeconds)

    return age
}


console.log(age("03/01/1995"))
console.log(age("02/29/1995"))
console.log(age("02/28/1995"))
console.log(age("02/27/1995"))

//Buscar solução mais robusta