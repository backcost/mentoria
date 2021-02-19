// 2.Escreva uma função que recebe um array e retorna 
// o primeiro elemento do array se nenhum outro argumento 
// for passado, porém se outro argumento for passado ela vai 
// retornar os "n" primeiros elementos do array.


// Entrada => array
// Processamento =>
// 1. Função que recebe o primeiro argumento como array e um
// segundo argumento que já começa com um valor
// Saída => o primeiro elemento do array, porém se outro argumento 
// for passado ela vai retornar os "n" primeiros elementos


const first = (array, n = 1) => {
    let temporaryArray = []
    for(let index = 0; index < n; index++) {
        temporaryArray.push(array[index])
    }
    return temporaryArray
}

console.log(first([1,2,3])) // => 1
console.log(first([1,2,3], 2)) // => [1,2]
console.log(first([1,2,3], 3)) // => [1,2,3]
console.log(first([1,4,8,9,12], 1)) // => [1,4,8,9]
