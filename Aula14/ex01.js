// 01. Escreva uma função em JavaScript que reverta um número.


const reverseNumber = (number) => {
    reversed = ''
    let stringNumber = number.toString().split('')
    for (let i = stringNumber.length - 1; i >= 0; i--) {
        reversed += stringNumber[i]
    }
    return Number(reversed)
}

console.log(reverseNumber(1245))
console.log(reverseNumber(8715))
console.log(reverseNumber(41249235))

//Marcle
// const convertedNumber = String(number)
// const reversed = convertedNumber.split('').reverse().join('')
