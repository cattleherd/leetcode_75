/**
 * @param {number} n
 * @return {number}
 */

/*

    if(n === 1){
        return 1
    }else if(n === 2){
        return 2
    }else if(n === 3){
        return 5
    }else if(n === 4){
        

*/
var numTilings = function(n) {
    let full = new Array(n+1).fill(0) // num ways to reorganize dominos
    let topfill = new Array(n+1).fill(0)
    let bottomfill = new Array(n+1).fill(0)

    //full = full[i-1] + full[i-2] + topfill[i-1] + bottomfill[i-1]
    //topfill[i-1] = full[i-2] + bottomfill[i-1]
    //bottomfill[i-1] = full[i-2] + topfill[i-1]

    if(n===0){
        return 1;
    }else if(n === 1){
        return 1;
    }else if(n === 2){
        return 2;
    }
    full[0] = 1;
    full[1] = 1
    topfill[1] = 0
    bottomfill[1] = 0
    for(let i = 2; i <= n; i++){
        full[i] = full[i-1] + full[i-2] + topfill[i-1] + bottomfill[i-1]
        topfill[i] = full[i-2] + bottomfill[i-1]
        bottomfill[i] = full[i-2] + topfill[i-1]
    }
    return full % mod (10**9 + 7)
};

numTilings(200)