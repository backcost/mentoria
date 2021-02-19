// 3. Escreva uma função que recebe um array e retorna o último 
// elemento do array se nenhum outro argumento for passado, porém 
// se outro argumento for passado ela vai retornar os ultimos "n" 
// elementos do array.


// Entrada =>
// Processamento =>
// Saída =>

const last = (array, n = 1) => {
    let temporaryArray = []
    for(let index = array.length - n; index < array.length; index++) {
        temporaryArray.push(array[index])
    }
    return temporaryArray
}

console.log(last([1,2,3])) // => 3
console.log(last([1,2,3], 2)) // => [2,3]
console.log(last([1,2,3], 3)) // => [1,2,3]
console.log(last([1,4,8,9,12], 3)) // => [8,9,12]
