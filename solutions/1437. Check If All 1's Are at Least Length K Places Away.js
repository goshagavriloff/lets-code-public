/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let arr=[];
  let result=true;
  nums.forEach((el,i)=>{
    el==1&&arr.push(i);
  });
  arr.forEach((el,i)=>{
    if (i==0){return}
    let prev=arr[i-1];
    result&=(el-prev)>k;
  });
  return result;
};
​
​
