/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    return nums.sort((a,b)=>{
        let sub=getCount(a,nums)-getCount(b,nums);
        return sub==0?b-a:sub;
    });
};
​
let getCount=(el,nums)=>{
    return nums.filter((num)=>{
        return num==el
    }).length;
}
