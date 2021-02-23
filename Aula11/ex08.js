// 8. Escreva uma função para gerar um array entre dois inteiros 
//(valores positivos e negativos são aceitos).

const rangeBetween = (start, end) => {
    let array = []
    for (let count = start; count <= end; count++) {
        array.push(count)
    }
    return array
}
console.log(rangeBetween(4, 7)); // => [4, 5, 6, 7]
console.log(rangeBetween(2, 11))
