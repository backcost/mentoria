// Escreva uma função que retorne o primeiro caractere não repetido.
// Exemplo: 'abacddbec' ; Saida Esperada: 'e'
 

const firstUnique = (string) => {
    var editedString = string.toLowerCase().replace(/ /g,'')

    for (let letter of editedString) {
        count = 0
        for (let again of editedString) {

            if (letter === again) {
                count++
            }
        }
        if (count === 1) {
            return letter
        }
    }
}
    
console.log(firstUnique('abacddbec')) // e
console.log(firstUnique('Gabriel Costa Ferreira')) // g
console.log(firstUnique('hseysysrh')) // e
