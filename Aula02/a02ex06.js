// 06. Peça ao usuário uma quantidade de linhas 
// e outra de colunas, depois declare tal matriz, 
// inicialize todos os elementos de 1 até 'linha x coluna'.

// Entrada => c colunas e l linhas
// Processamento =>
// 1. Criar l linhas, percorrer as l linhas e atribuir o valor
// das colunas.
// Saída => Matriz contendo c colunas e l linhas e todos
// os elementos preenchidos, iniciando em 1.

let createMatrix = (columnCount, lineCount) => {
    let matrix = []
    let c = 0

    for(let i = 0; i < lineCount; i++) {
        let line = []
        for (let j = 0; j < columnCount; j++) {
            line.push(c)
            c++
        }
        matrix.push(line)
    }
    return matrix
}
console.log(createMatrix(3,3))
