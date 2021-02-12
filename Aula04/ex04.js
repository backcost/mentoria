// 4 – Peça ao usuário para digitar várias idades. 
// Exiba quantas pessoas são maior de idade (18 anos) 
// e quantas são menores.


// Entrada => n idades
// Processamento => 
// 1. Criar 2 arrays: minorArray e olderArray
// 2. Laço de repetição para repetir o processo n vezes
// 3. Condicional dentro do laço para analisar se a idade é <18 ou >=
// Saída => Quantidade de maiores e menores de 18 anos


const readlineSync = require('readline-sync')

let run = true
minorArray = []
olderArray =[]

while(run) {
    let input = readlineSync.question('Digite a idade (ou "sair" para encerrar): ').toUpperCase()

    if (input === 'SAIR') {
        run = false
        break
    }
    if (input < 18) {
        minorArray.push(Number(input))
    } else {
        olderArray.push(Number(input))
    }
}
console.log(`${minorArray.length} pessoas tem menos de 18 anos e ${olderArray.length} tem mais de 18 anos.`)
