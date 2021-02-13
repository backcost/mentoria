// 5 – Crie um programa que entre com os dados de altura 
// e sexo de 5 pessoas. Imprima na tela quantas pessoas 
// são do sexo masculino e quantas pessoas são do sexo 
// feminino. Mostre também qual é a maior altura e se essa 
// altura é de um homem ou uma mulher.


// Entrada => altura e sexo de 5 pessoas
// Processamento =>
// 1. Pedir altura e sexo do usuário
// 2. While para cobrir erros na digitão do sexo
// 3. Condicional para contar homens e mulheres
// 4. Condicional para ver qual é o mais alto
// Saída => 
// 1. print quantas são do sexo masculino e quantas são mulheres
// 2. mostrar qual a maior altura e o sexo dessa pessoa


const readlineSync = require('readline-sync')
let women = 0
let men = 0
let tallest = 0
let tallestgender = 0

for (count = 1;count < 6; count++) {
    let height = readlineSync.question(`Digite a altura (cm) da pessoa ${count}: `)
    let gender = readlineSync.question(`Homem ou Mulher? `).toLowerCase()
    while(gender != 'homem' && gender != 'mulher') {
        gender = readlineSync.question(`Opcao invalida. Digite homem ou mulher: `).toLowerCase()
    }
    if (gender === 'homem') {
        men++
    } else {
        women++
    } if (height > tallest){
        tallest = height
        tallestgender = gender
    }

}
console.log('----------------------------------')
console.log(`${men} homem(ns);`)
console.log(`${women} mulher(es);`)
console.log(`A maior altura é ${tallest}cm e a pessoa é ${tallestgender};`)

// E se mais de uma pessoa tiver a mesma altura?
