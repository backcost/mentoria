// 2. Criar uma calculadora onde tenhamos as seguintes funções:
//
// add
// subtract
// multiply
// divide


class Calculator {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    add() {
        return this.x + this.y
    }
    
    subtract() {
        return this.x - this.y
    }
    
    multiply() {
        return this.x * this.y
    }
    
    divide() {
        return this.x / this.y
    }
}

const iae = new Calculator(5,3)

console.log(iae.add())
console.log(iae.subtract())
console.log(iae.multiply())
console.log(iae.divide())
