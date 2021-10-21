/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let a=nums.find((el)=>{
        return nums.filter((item)=>{return item==el}).length>1
    });
    let b=getCurArr(nums.length).find((el)=>{
        return !nums.includes(el);
    });
    return [a,b];
};
​
let getCurArr=(n)=>{
    return Array.from({ length: n }, (v,i) => i+1)
}
