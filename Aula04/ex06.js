// 6 – Peça ao usuário para digitar vários nomes. 
// Exiba na tela todos os nomes digitados, porém 
// de maneira invertida (do último para o primeiro).


// Entrada => n nomes
// Processamento => 1. readlineSync para entrada de dados
// 2. loop while para repetir o processo várias vezes
// 3. if Sair para sair do loop
// 4. colocar nomes em um array
// 5. for inverso para exibir nomes
// Saída => os nomes digitados (do último ao primeiro)


const readlineSync = require('readline-sync')

let namesArray = []

while(true) {
    let input = readlineSync.question('Digite um nome ou "sair" para encerrar: ').toLowerCase()
    if (input === 'sair') {
        break
    }
    namesArray.push(input)
}
for(let count = 0; count < namesArray.length;count++)
    console.log(namesArray[namesArray.length - 1 - count])
