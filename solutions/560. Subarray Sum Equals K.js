/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
        let count = 0;
        let sum = 0;
        let map=new Map();
        map.set(0, 1);
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (map.has(sum - k)){
                count += map.get(sum - k);
            }
            let val=map.get(sum);
            val=val===undefined?0:val;
            map.set(sum, val + 1);
        }
        return count;
};
