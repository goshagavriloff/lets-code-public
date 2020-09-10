/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let arr=nums.sort((a,b)=>{return a-b});
    let n=nums.length;  
    
    let maxVal=(n!=0)?arr[n-1]+1:1;
    
    
    let maxSum=[...Array(maxVal).keys()].reduce(getSum,0);
    let curSum=nums.reduce(getSum,0);
    
    let result=maxSum-curSum;
    
    let isValid=(result==0)&&(arr[0]==0);
    
    return isValid?n:result;
    
};
​
let getSum=(acc,val)=>{
        return acc+val;
}
