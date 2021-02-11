// 01. Crie uma função que recebe um array 
// de 2 números e coloque eles em ordem
// crescente. Não use o método sort.


// Entrada => array de 2 números
// Processamento =>
// 1. Criar função
// 2. Criar array ordered para colocar os números em ordem
// Saída => array ordenado

function sort(array) {
    let sorted = [array[0]]
    if (array[1]>array[0]) {
        sorted.push(array[1])
    } else {
        sorted.unshift(array[1])
    } if (array[2]>=sorted[1]) {
        sorted.push(array[2])
    } else if (array[2]<=sorted[0]) {
        sorted.unshift(array[2])
    } else {
        sorted.splice(1,0,array[2])
    }
    return sorted
    sorted.forEach()
} 
console.log(sort([1,2,3]))
console.log(sort([1,3,2]))
console.log(sort([2,1,3]))
console.log(sort([2,3,1]))
console.log(sort([3,1,2]))
console.log(sort([3,2,1]))
console.log(sort([1,1,1]))
console.log(sort([1,2,2]))
console.log(sort([2,1,1]))
console.log(sort([1,1,2]))
console.log(sort([2,2,1]))