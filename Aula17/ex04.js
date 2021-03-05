// 4. Escreva uma função em JavaScript que verifica se um objeto 
// tem a propriedade passada como argumento.

const hasKey = (object, key) => {
    return Object.keys(object).includes(key)
    // return Object.hasOwnProperty(key) é melhor
}

const obj = { name: 'Marcle' }
console.log(hasKey(obj, 'name')) // => true
console.log(hasKey(obj, 'different')) //=> false
