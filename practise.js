/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    console.log(candies)
    console.log(extraCandies)
    let result = []

    let largest = Math.max(...candies)
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= largest){
            result.push("true")
        }else{
            result.push("false")
        }
    }
    console.log(result)
    return result
};

kidsWithCandies([4,2,1,1,2],1)