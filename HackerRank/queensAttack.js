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

const queensAttack = (n, k, r_q, c_q, obstacles = [[]]) => {
    if (n % 2 === 0) {
        var maxAttack = 4 * n - 5
    } else {
        var maxAttack = 4 * n - 4
    }

    for (let i = 1; i < n / 2; i++) {
        if (c_q === i  || c_q === n + 1 - i || r_q === i || r_q === n + 1 - i) {
            maxAttack -= 2 * (Math.ceil(n / 2) - i)
        }
    }

    for(el of obstacles) {
        var r_o = el[0]
        var c_o = el[1]

        if (r_o === r_q) {
            if (c_o >= c_q) {
                maxAttack -= (n - c_o + 1)
            } else {
                maxAttack -= c_o
            }
            
        } else if (c_o === c_q) {
            if (r_o >= r_q) {
                maxAttack -= (n - r_o + 1)
            } else {
                maxAttack -= r_o
            }
        }
    }
    
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
