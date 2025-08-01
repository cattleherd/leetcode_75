/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
   let dp = Array.from({length: text2.length+1},()=>{
    return Array(text1.length+1).fill(0)
   })

   for(let i = 1; i < dp[0].length; i++){
    for(let j = 1; j < dp.length; j++){
        if(text1[i-1] === text2[j-1]){
            dp[j][i]= 1 + dp[j-1][i-1]
        }else{
            dp[j][i] = Math.max(dp[j-1][i],dp[j][i-1])
        }
    }
   }
   return(dp[text2.length][text1.length])
};
  longestCommonSubsequence('scabcd','sabdcd')
