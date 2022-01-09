/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let size=nums.length;
    let res=nums.concat(nums);
    res= res.map((x,j)=>{
        let i=res.indexOf(x,j);
        let arr=res.slice(i);
        let val=arr.find((el)=>{return x<el;});
         return val===undefined?-1:val;
    });
​
    return res.slice(0,size);
};
​
​
