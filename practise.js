/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
       /*
          ""   K   I   T
    ""    0    1   2   3
    S     1    1   2   3
    I     2    2   1   2
    T     3    3   2   1

    SI->KIT
    1) DIAGONAL 
        SI->KIT = S->KI + I->T = 2 + 1 = 3 (subsitution)
    2) Bottom LEFT
       SI->KIT = SI->KI + T = 1 + 1 = 2    (insertion)
    3) Top RIGHT
       SI->KIT = S->KIT - I = 3 + 1 = 4    (deletion)
    
    */

    let matrix = Array.from( { length: word1.length + 1 }, ()=>{ return Array.from(word2.length + 1).fill(0)})
    for(let i = 0; i < word1.length + 1; i++){
        matrix[i][0] = i
    }
    for(let i = 0; i < word2.length+1; i++){
        matrix[0][i] = i
    }
    for(let i = 1; i < word1.length+1; i++){
        for(let j = 1; j < word2.length+1;j++){                
            if(word1[i-1] === word2[j-1]){
                matrix[i][j] = matrix[i-1][j-1]
            }else{
                matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1],matrix[i-1][j-1]) + 1
            }
        }
    }
    console.log(matrix)
    return matrix[word1.length][word2.length]
};

minDistance("horse","ros")