/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let copy=nums.slice().sort(descSort);
    let max=copy[0];
    let result=nums.findIndex((el)=>{return el==max});
    let isValid=nums.every((el)=>{
      return el==max?true:max>=el*2;
    });
  
  
    return isValid?result:-1;
};
​
let descSort=(a,b)=>{return b-a};
