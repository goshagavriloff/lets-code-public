/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   return nums.map((el)=>{return el**2;}).sort((a,b)=>{return a-b;});
    
    
};
