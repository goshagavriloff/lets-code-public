/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let max=0;
    let set=new Set(nums);
    nums=[...set];
    for (let i=0;i<nums.length;i++){
        let item=nums[i];
        for (let j=0;j<nums.length;j++){
            if (i!=j){
                let cursor=nums[j];
                let check=item^cursor;
                max=(check>max)?check:max;
            }
        }        
    }
    return max;
};
