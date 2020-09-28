/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return recSum(nums).reverse();
};
​
let recSum=(nums,sum=0)=>{
    if(nums.length==1){
        return [nums[0]+sum];
       }else {
            sum+=nums.reduce((acc,val)=>{return acc+val},0);
            nums.pop();
            return [sum].concat(recSum(nums));
       }
    
}
