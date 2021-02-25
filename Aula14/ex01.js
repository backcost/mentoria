// 01. Escreva uma função em JavaScript que reverta um número.


const reverseNumber = (number) => {
    reversed = ''
    var stringNumber = number.toString()
    for (i = stringNumber.length - 1; i >= 0; i--)
        console.log(stringNumber[i])
        reversed += `${stringNumber[i]}`
    return reversed
}

console.log(reverseNumber(1245))
console.log(reverseNumber(8715))
console.log(reverseNumber(4124))
