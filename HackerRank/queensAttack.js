// You will be given a square chess board with one queen and a number 
// of obstacles placed on it. Determine how many squares the queen can 
// attack.

// A queen is standing on an n x n chessboard. The chess board's rows 
// are numbered from 1 to n, going from bottom to top. Its columns are 
// numbered from 1 to n, going from left to right. Each square is 
// referenced by a tuple, (r,c), describing the row, r, and column, c, 
// where the square is located.

// The queen is standing at position (rq, cq). In a single move, she 
// can attack any square in any of the eight directions 
// (left, right, up, down, and the four diagonals). 

// There are obstacles on the chessboard, each preventing the queen 
// from attacking any square beyond it on that path. Given the queen's 
// position and the locations of all the obstacles, find and print the 
// number of squares the queen can attack from her position at (rq, cq).

const queensAttack = (n, k, r_q, c_q, obstacles) => {
    // without obstacles
    let north = n - r_q
    let south = r_q - 1
    let east = n - c_q
    let west = c_q - 1

    let northeast = Math.min(east, north)
    let northwest = Math.min(west, north)
    let southeast = Math.min(east, south)
    let southwest = Math.min(west, south)

    // now with obstacles
    

    const maxAttack = north + south + east + west + northeast + northwest +
    southeast + southwest

    return maxAttack

}

console.log(queensAttack(8, 0, 4, 4)) // 27
console.log(queensAttack(8, 1, 4, 4, [[3, 5]])) // 24
console.log(queensAttack(4, 0, 4, 4)) // 9
console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])) // 10
console.log(queensAttack(1, 0, 1, 1)) // 0
console.log(queensAttack(4, 0, 2, 2)) // 11
console.log(queensAttack(5, 0, 5, 5)) // 12
console.log(queensAttack(100000, 0, 4187, 5068)) // 308369
