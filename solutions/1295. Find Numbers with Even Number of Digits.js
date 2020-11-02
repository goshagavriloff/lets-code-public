/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result=nums.filter((el)=>{
        return el.toString(10).length%2==0});
    return result.length;
};
