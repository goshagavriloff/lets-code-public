/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let occurrences = nums.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});
    
    let result=Object.entries(occurrences)
    .sort(([,a],[,b]) => b-a)
    .map(([a,])=>a);
    
    result=Array.from(new Set(result));
    return result.slice(0,k);
};
