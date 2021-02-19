// 4. Escreva uma função que ordene os elementos de um array 
// de ordem crescente.


const ascendingSort = (array) => {
    const ascending = (a, b) => a - b
    return array.sort(ascending)
}

var a = [4, 5, 4, 2, 1, 8, 10, 11, 12]
var b = [9, 7, 10, 2, 12, 8, 10, 11, 5]
console.log(ascendingSort(a))
console.log(ascendingSort(b))
