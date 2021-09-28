/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    nums=nums.sort((a,b)=>{return a%2-b%2});
    
    let size=nums.length/2;
    let removed=nums.splice(0,size);
    
    let result=[];
    
    for (let i=0;i<size;i++){
        result.push(removed[i]);
        result.push(nums[i]);
    }
    return result;
};
