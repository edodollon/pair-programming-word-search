const transpose = function(matrix) {
    let outputMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!outputMatrix[j]) {
          outputMatrix.push([matrix[i][j]]);
        } else {
          outputMatrix[j].push(matrix[i][j]);
        }
      }
    }
    return outputMatrix;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (const l of verticalJoin) {
        if (l.includes(word)) return true
    }
    // let matrixForShifting = letters;
    // for (let i = 1; i < matrixForShifting.length; i++) {
    //     matrixForShifting[i].shift(i)
    // }
    // console.log(matrixForShifting);
    // let diagonalJoin1 = [];
    // let diagonalJoin2 = [];
    // for (let i = 0; i < letters[0].length; i ++) {
    //     for (let j = i; j >= 0; j --) {
    //         diagonalJoin[i] += letters[i][j];
    //     }
    // }
    // for (let i = 0; i < letters[0].length; i ++) {
    //     for (let j = 1; j <= letters[i].length; j ++) {
    //         diagonalJoin[i] += letters[i][j];
    //     }
    // }
    // for (let i = 0; i < letters[0].length; i ++) {
    //     diagonalJoin1[i] = letters[0][i];
    //     for (let j = 1; j <= i; j ++) {
    //         diagonalJoin1[i] += letters[j][i-j];
    //     }
    // }

    // for (let i = letters[0].length - 1; i > 0; i --) {
    //     diagonalJoin2[i] = letters[letters[0].length - 1][i];
    //     for (let j = 1; j <= i; j ++) {
    //         diagonalJoin2[i] += letters[letters.length-j][i-j];
    //     }
    // }
    
    // console.log('DIA1:', diagonalJoin1);
    // console.log('DIA2:', diagonalJoin2);
    return false;
}

module.exports = wordSearch