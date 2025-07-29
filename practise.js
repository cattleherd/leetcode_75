/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let max;
            if(nums.length === 0 || !nums){
            return 0
        }else if(nums.length === 1){
            return nums[0]
        }else if(nums.length === 2){
            return Math.max(nums[0],nums[1])
        }else{
            nums[1] = Math.max(nums[0],nums[1])
     for(let i = 2; i < nums.length; i++){
        max = Math.max(nums[i-1],nums[i] + nums[i-2])
        nums[i] = max
     }
    }
    return max;
};

rob([2,1,1,2])