// 7. Escreva uma função para encontrar um elemento em um array, 
// caso exista retornar a posição, caso não exista retornar null.

const remove = (array, element) => {
    return array.filter((different) => different !== element)
}

console.log(remove([1,2,3], 3)); // => [1,2]
console.log(remove([1,2,3,3], 3)); // => [1,2]
console.log(remove([1,2,3,2,5,2], 2)); // => [1,3,5]