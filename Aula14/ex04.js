// Escreva uma função em JavaScript que aceita uma string como 
// parametro e encontra a maior palavra contida na string.
// Exemplo: "Web Development Tutorial"
// Saida Esperada: "Development"


const biggestWord = (string) => {
    var separeted = string.split(' ')
    let biggest = ''
    for (let e of separeted) {
        if (e.length > biggest.length) {
            biggest = e
        }
    }
    return biggest
}

console.log(biggestWord('Web Development Tutorial'))
console.log(biggestWord('Gabriel Costa Ferreira'))
