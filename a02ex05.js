// 05. Crie uma função que recebe um vetor 
// e um número. Ela deve mostrar todos
// os índices onde esse número aparece no vetor, 
// e não só apenas o primeiro e/ou
// último índice em que o número aparece 
// (como nos métodos indexOf e lastIndexOf).

// Entrada => Vetor e o número
// Processamento =>
// 0. Inicializar um array chamado posições vazio
// 1. Percorrer o vetor dado em busca do número
// 2. Se o número encontrado é igual ao número passado, vamos
// salvar a posição dele no array de posições.
// 3. Se não, continuamos para o prox número
// 4. Retornar o array de posições
// Saída => Vetor contendo todas as posições que o número aparece

const find = (array, number) => {
    const positions = []
    for (let pos = 0; pos < array.length; pos++) {
        if (array[pos] === number) {
            positions.push(pos)
        }
    }
    return positions
}

const array = [1,2,1,1,3]
const number = 1

console.log(find(array, number))