/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k=0;
    for (let el of nums){
      while(getSizeOfEl(el,nums)>2){
        let i=nums.indexOf(el);
        nums.splice(i,1);
      }
    }
  return nums.length;
};
let getSizeOfEl=(el,nums)=>{
  let [a,b]=[nums.indexOf(el),nums.lastIndexOf(el)];
​
  return b-a+1;
}
