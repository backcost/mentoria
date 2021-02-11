// 1 – Calcule a média de diversas notas digitadas pelo usuário. 
// O número de notas pode variar. O usuário vai usar o comando 
// "fim" para dizer quando as notas acabaram e o calculo da média 
// pode ser feita.


// Entrada => n notas
// Processamento =>
// 1. Colocar notas em um array
// 2. Parar quando o usuario digitar fim
// 3. Somar componentes do array
// 4. Dividir a soma pelo length do array
// Saída => média das notas

let readlineSync = require('readline-sync')

let run = true
let grades = []

while(run) {
    let input = Number(readlineSync.question('Digite uma nota: '))
    
    if (input === 'fim') {
        run = false
    } 
    grades.push(input)
}
console.log(grades)
