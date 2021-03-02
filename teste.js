const howManyTimesRepeat = (string) => {
    for (let letter of string) {
        count = 0
        for (let again of string) {

            if (letter === again) {
                count++
            }
        }
        if (count === 1) {
            return letter
        }
    }
}

console.log(howManyTimesRepeat('Gabriel Costa'))
console.log(howManyTimesRepeat('Ferramentas'))
