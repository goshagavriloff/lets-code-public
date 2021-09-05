/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    return nums.some((el,i)=>{
        let arr=getArr(nums,i);
        return isValidIncr(arr);
    });
};
let getArr=(nums,i)=>{
    return []
            .concat(nums.slice(0,i))
            .concat(nums.slice(i+1,nums.length));
}
let isValidIncr=(arr)=>{
    return  arr.every((el,i)=>{
        return (i==arr.length-1)?true:el<arr[i+1];
    });
}
