/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let result=[];
    while (queries.length!=0){
        let [val,i]=queries.shift();
        nums[i]+=val;
        result.push(getSumEvenNums(nums));
    } 
    return result;
    
};
let getSumEvenNums=(nums)=>{
    return nums.reduce((acc,val)=>{
        let add=val%2==0?val:0;
        return acc+add;
    },0);
}
