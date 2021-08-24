/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    return nums.some((el,i)=>{
        let health=k;
        let result=false;
        while (health>0){
            let hasNext=(nums[i+health]!=null);
            result|=(hasNext)?el==nums[i+health]:false;
            health--;
        }
        return result;
    });
};
