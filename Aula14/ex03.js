// 3. Escreva uma função em JavaScript que retorna uma string passada com as
// letras em ordem alfabética. Assuma que pontuações e números não estão
// incluidas na string passada. 
// Exemplo: "webmaster"Saida Esperada: "abeemrstw"


const sortString = (string) => {
    var noSpace = string.replace(/ /g,'')
    return noSpace.split('').sort().join('')
}

console.log(sortString('Abacate'))
console.log(sortString('webmaster'))
