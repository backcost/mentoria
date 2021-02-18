// 01. Escreva uma função que verifica se uma entrada é um array ou não


const isArray = (array) => {
    return Array.isArray(array)
}

a = 1
b = [1, 2]
c = 'Hello, World'
console.log(isArray(a))
console.log(isArray(b))
console.log(isArray(c))
