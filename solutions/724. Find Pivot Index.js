/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    return nums.findIndex((el,i)=>{
        let [a,b]=[nums.slice(0,i),nums.slice(i+1)].map((sub)=>{
            return sub.reduce((acc,val)=>{return acc+val},0);
        });
        
        return a==b;
    });
    
};
