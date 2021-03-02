// Escreva uma função em JavaScript que aceita uma string como 
// parametro e conta o número de vogais presentes na string. 
// (y não conta como vogal). Exemplo: "The quick brown fox"
// Saida Esperada: 5


const countVowels = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    var editedString = string.toLowerCase()
    
    for (let e of editedString) {
        if (vowels.includes(e)) {
            count++
        }
    }
    return count
}

console.log(countVowels('The quick brown fox')) //5
console.log(countVowels('Gabriel Costa Ferreia')) //9
