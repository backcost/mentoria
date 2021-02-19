// 01. Escreva uma função que verifica se uma entrada é um array ou não


const is_array = (array) => {
    return Array.is_array(array)
}

a = 1
b = [1, 2]
c = 'Hello, World'
console.log(is_array(a))
console.log(is_array(b))
console.log(is_array(c))
