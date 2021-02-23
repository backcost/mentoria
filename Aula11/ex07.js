// 7. Escreva uma função para encontrar um elemento em um array, 
// caso exista retornar a posição, caso não exista retornar null.

const findElement = (array, element) => {
    var index = array.indexOf(element)
    if (index > 0) {
        return index
    }
    return null
}
console.log(findElement([1,2,3], 3)); // => 2
console.log(findElement([1,2,3,3], 3)); // => 2
console.log(findElement([1,2,3,2,5,2], 2)); // => 1
console.log(findElement([1,2,3,2,5,2], 6)); // => null