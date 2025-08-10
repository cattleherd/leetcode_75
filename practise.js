/**
 * @param {number} n
 * @return {number[][]}
 */

/*
123
894
765

*/
var generateMatrix = function (n) {
  let arr = [];
  for (let i = n ** 2; i > 0; i--) {
    arr.push(i);
  }

  let matrix = Array.from({ length: n }, () => {
    return Array(n).fill(0);
  });

  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let top = 0;
  while ((top <= bottom) && (left <= right)) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = arr.pop();
    }
    top++;

    if (top > bottom) {
      break;
    }
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = arr.pop();
    }
    right--;

    if (right < left) {
      break;
    }
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = arr.pop();
    }
    bottom--;

    if (bottom < top) {
      break;
    }
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = arr.pop();
    }
    left++;
  }
  return matrix
};

generateMatrix(3);
