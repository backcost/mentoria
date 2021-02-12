// 03. Crie um script que pergunte 3 números ao usuário, 
// coloque em um array, depois exiba tal array. 
// Modifique os elementos do array de modo a a sequência
// de números ficar do contrário.


// Entrada => readlineSync para inserir 3 números
// Processamento =>
// 1. Criar array para inserir os números digitados pelo usuário
// 2. Usar o for para inserir números em um array
// 3. Usar o for para inverter o array
// Saída => array invertido


let readlineSync = require('readline-sync')
let array = []
let reversed = []

for(let c = 1; c < 4;c++) {
    let input = readlineSync.question('Digite uma numero: ')
    array.push(input)
}
for(let pos in array) {
    reversed.push(array[array.length-1-pos])
}


console.log(reversed)
