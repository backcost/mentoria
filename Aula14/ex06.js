// 6. Escreva uma função em JavaScript que extraia os caracteres 
// unicos de uma string. Exemplo: "thequickbrownfoxjumpsoverthelazydog"
// Saida Esperada: "thequickbrownfxjmpsvlazydg"


const removeDuplicates = (string) => {
    const withoutRepeated = []
    var editedString = string.toLowerCase()
    
    for (let e of editedString) {
        if (!withoutRepeated.includes(e)) {
            withoutRepeated.push(e)
        }
    }
    return withoutRepeated.join('')
}

console.log(removeDuplicates('thequickbrownfoxjumpsoverthelazydog')) 
//thequickbrownfxjmpsvlazydg
console.log(removeDuplicates('Gabriel Costa Ferreia')) 
//Gabriel CostF

// Usando o Set é mais prático 
