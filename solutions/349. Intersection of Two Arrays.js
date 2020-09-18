/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let mySet=new Set(
        nums1.filter((el)=>{
        return nums2.includes(el);
        })
    );
    return Array.from(mySet);
};
