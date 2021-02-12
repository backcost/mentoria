// 04. Faça uma função que recebe um array de qualquer 
// tamanho e ordene seus elementos na ordem crescente. 
// Faça sua função na mão, não invoque nenhum método de sorting.


// Entrada => array de n números
// Processamento =>
// 1. Criar função
// 2. Criar array sorted e inserir o primeiro número
// 3. For para percorrer array original
// 4. While parar comparar om array ordenado ja existente
// Saída => array ordenado


const sort = (array) => {
    let sorted = [array[0]]

    for(let pos = 1;pos < array.length;pos++){
        let c = 0
        while (c < sorted.length) {
            if (array[pos] < sorted[c]) {
                sorted.splice(c,0,array[pos])
                break
            } else if (c === sorted.length - 1) {
                sorted.push(array[pos])
                break
            } else {
                c++
            }
        }
        
    }
    return sorted
} 


console.log(sort([3,2,3,4]))
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
