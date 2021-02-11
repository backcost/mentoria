// 04. Faça uma função que recebe um array de qualquer 
// tamanho e ordene seus elementos na ordem crescente. 
// Faça sua função na mão, não invoque nenhum método de sorting.


// Entrada => array de n números
// Processamento =>
// 1. Criar função
// 2. Criar array sorted para colocar os números em ordem
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
} 


console.log(sort([1,2,3,4]))
console.log(sort([1,2,4,3]))
console.log(sort([1,3,2,4]))
console.log(sort([1,3,4,2]))
console.log(sort([1,4,2,3,5,2]))
console.log(sort([1,4,3,2]))
console.log(sort([1,2,1,1]))
console.log(sort([1,2,2,2]))
console.log(sort([1,2,3,3,1]))
console.log(sort([1,2,4,4]))
console.log(sort([1,3,1,1,4,5]))
console.log(sort([1,3,2,2]))
console.log(sort([1,3,3,3]))
console.log(sort([1,3,4,4]))
console.log(sort([1,4,1,1]))
console.log(sort([1,4,2,2]))
console.log(sort([1,4,3,3,1,4,5,1]))
console.log(sort([1,4,4,4,1,9,5,8]))
