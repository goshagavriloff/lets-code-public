/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map((el)=>{
        return nums.filter((item)=>{
            return item<el
        }).length;
    });
};
