function multiply(multiplicador, ...args) {
    console.log(args)
    return args.map(x => multiplicador * x)
}
const a = multiply(2, 1, 2, 4)
console.log(a)