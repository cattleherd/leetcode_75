/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m === 1 && n == 1){
        return 1
    }
    let dp = Array.from({ length: m }, ()=>{
        return Array(n).fill(0)
    })
    for(let i = 1; i < m; i++){
        dp[i][0]= 1      
    }
    for(let j = 1; j < n; j++){
        dp[0][j]= 1
    }
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = dp[i][j-1] + dp[i-1][j]
        }
    }
    return dp[m-1][n-1]
};