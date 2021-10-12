/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x=nums.splice(0,n);
    nums=nums.reduce((acc,y,i)=>{
        return acc.concat(x[i],y);
    },[]);
    return nums;
};
