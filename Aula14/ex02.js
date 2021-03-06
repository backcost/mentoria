// 2. Escreva uma função em JavaScript que verifique se uma string 
// passada é um palindromo ou não. Um palindromo é uma palavra, 
// frase ou sequencia que é lida da mesma maneira de trás pra frente, 
//por exemplo: "madam", "nurses run", "roma me tem amor".


const isPalindrome = (string) => {
    var removeSpace = string.replace(/ /g,'').toLowerCase()
    var reversed = removeSpace.split('').reverse().join('')
    return reversed === removeSpace
}

console.log(isPalindrome('madam'))
console.log(isPalindrome('nurses run'))
console.log(isPalindrome('Roma me tem amor'))
console.log(isPalindrome('abacate'))
