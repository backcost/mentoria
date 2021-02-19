// 5. Escreva uma função que ordene os elementos de um array 
// de ordem decrescente.


const descendingSort = (array) => {
    const descending = (a, b) => b - a
    return array.sort(descending)
}

var a = [4, 5, 4, 2, 1, 8, 10, 11, 12]
var b = [9, 7, 10, 2, 12, 8, 10, 11, 5]
console.log(descendingSort(a))
console.log(descendingSort(b))
