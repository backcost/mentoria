/* Starting with a 1-indexed array of zeros and a list of operations, 
for each operation add a value to each the array element between two 
given indices, inclusive. Once all operations have been performed, 
return the maximum value in the array. */

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    isValidIndex(index) {
        return (index <= this.length || index > 0)
    }

    push(val) {
        const newNode = new Node(val)
        const isEmpty = !this.head

        if (isEmpty) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++

        return this
    }

    // Return node at given index
    getNodeAtIndex(index) {
        if (!this.isValidIndex(index)) {
            return null
        }

        let currentNode = this.head
        let currentIndex = 0

        while(currentIndex !== index) {
            currentNode = currentNode.next
            currentIndex++
        }
        return currentNode
    }

    // Update node at given index
    setNodeAtIndex(val, index) {
        const node = this.getNodeAtIndex(index)

        if (node) {
            node.value = val

            return node
        }

        return null

    }

const arrayManipulation = (n, queries) => {
    const newList = new SinglyLinkedList()
    var maximum = null

    for (let i = 0; i < n; i++) {
        newList.push(0)
    }
    for (let query of queries) {
        for (let i = query[0] - 1; i < query[1]; i++) {
            var oldValue = newList.getNodeAtIndex(i).value
            newList.setNodeAtIndex((query[2] + oldValue), i)
        }
    }
    for (let i = 0; i < n; i++) {
        let currentValue = newList.getNodeAtIndex(i).value
        if (currentValue > maximum) {
            maximum = currentValue
        }
    }
    
    return maximum
}

console.log(arrayManipulation(10, [[1,5,3], [4,8,7], [6,9,1]])) //10
console.log(arrayManipulation(5, [[1,2,100], [2,5,100], [3,4,100]])) //200
