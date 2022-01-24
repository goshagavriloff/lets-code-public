/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let size=nums.length;
    let first=nums[0];
    let queue=[setQueue(first),setQueue(-first)];
    let result=0;
    
    while (queue.length!=0){
        let cursor=queue.pop();
        let {sum,level}=cursor;
        let next=nums[level+1];
        
        if (next!=undefined){
            queue.push(setQueue(sum+next,level+1));
            queue.push(setQueue(sum-next,level+1));
        } else {
            sum==target&&result++;
        }
        
    }
    return result;
    
};
let setQueue=(sum,level=0)=>{
    return {sum,level};
}
