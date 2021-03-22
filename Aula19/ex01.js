// 1. Escreva uma classe chamada Point que representa um ponto em duas
// dimensões. Essa classe ela tem que ter o seguinte construtor:

// construtor (x,y)

// A classe deve ter duas propriedades públicas:

// x

// y

// A nossa classe tem que ter um método chamado to String que ele
// retorna a representação do ponto na seguinte forma: [x = 1, y = 2]


class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return `[x = ${this.x}, y = ${this.y}]`
    }
}

const iae = new Point(2, 3)
console.log(iae.toString())
