/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let arr=[0,0,0];
    let len=nums.length;
    
    nums.forEach((el)=>{arr[el]++; });
    
    nums.fill(1);
    
    let [a,b,c]=arr;
​
    
    for (let i=0;       i<a;    i++){
        nums.splice(i, 1, 0);
    }
    for (let i=len-c;   i<len;  i++){
        nums.splice(i, 1, 2);
    }
    
    
    
};
​
​
