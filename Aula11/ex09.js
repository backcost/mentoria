// 9. Escreva uma função que cria um novo array com quantidade 
// de elementos e o valor dados pelo usuário.


const fill = (length, element) => {
    let array = []
    for (let count = 0; count < length; count++) {
        array.push(element)
    }
    return array
}
console.log(fill(3, 'a')); // => ['a', 'a', 'a']
console.log(fill(2, 'Marcle')); // => ['Marcle', 'Marcle']
