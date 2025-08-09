/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];

  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  let res = [];
  while ((top <= bottom) && (left <= right)) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++
    if(top > bottom){
        break;
    }
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--
    if(right < left){
        break;
    }
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--
    if(bottom < top){
        break;
    }
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  console.log(res)
};

spiralOrder();
