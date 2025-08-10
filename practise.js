/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var rotate = function (matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
  return matrix
};

/*
5  1  9  11     5  2  13  15
2  4  8  10  -> 1  4  3   14
13 3  6  7      9  8  6   12
15 14 12 16     11 10 7   16
*/

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
