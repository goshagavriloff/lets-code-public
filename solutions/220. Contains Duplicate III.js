/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i=0;i<nums.length;i++){
        let cursor=nums.slice(i+1,i+k+1);
        let check=cursor.some(j=>getAbsDiff(nums[i],j)<=t);
        if (check){
            return true;
        }
​
    }
    return false;
    
};
let getAbsDiff=(a,b)=>{
    return Math.abs(a-b);
}
