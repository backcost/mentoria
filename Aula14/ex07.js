// 7. Escreva uma função em JavaScreipt que aceita dois parametros, 
// uma string e uma letra, a função vai contar o número de ocorrência 
// da letra na string passada. Exemplo:: 'w3resource.com', 'o'
// Saida Esperada: 2
 


const countLetter = (string, letter) => {
    let count = 0
    var editedString = string.toLowerCase()
        
    for (let e of editedString) {
        if (e.includes(letter)) {
            count++
        }
    }
     return count
}
    
console.log(countLetter('w3resource.com', 'o')) // 2
console.log(countLetter('Gabriel Costa Ferreira', 'a')) // 3
console.log(countLetter('Bora tomar uma', 'o')) // 2
