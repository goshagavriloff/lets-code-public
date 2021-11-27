/**
 * @param {number[]} nums
 * @return {number[]}
 */
​
var productExceptSelf = function(nums) {
    let n=nums.length;
    let result=[];
    for (let i=0;i<n;i++){
        let cursor=nums.shift();
        let prod=1;
        for (let item of nums){
            prod*=item;
        }
        result.push(prod);
        nums.push(cursor);
    }
    return result;
​
​
};
​
​
