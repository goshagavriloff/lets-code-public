/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let result=[];
    queries.reverse();
    while (queries.length!=0){
        let [val,i]=queries.pop();
        nums[i]+=val;
        let temp=getSumEvenNums(nums);
        result.push(temp);
    } 
    return result;
    
};
let getSumEvenNums=(nums)=>{
    let result=0;
    nums.forEach((x)=>{
        (x%2==0)&&(result+=x);
    });
    return result;
}
