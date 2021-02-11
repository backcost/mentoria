function sort(array) {
    let ordered = [array[0]]
    if (array[0]>array[1]) {
        ordered.unshift(array[1])
        return ordered
    } else {
        return array
    }
}
console.log(sort([10,8]))
console.log(sort([10,10]))
console.log(sort([6,8]))
