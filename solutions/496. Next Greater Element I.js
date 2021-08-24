/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    return nums1.map((el)=>{
        let i=nums2.indexOf(el);
        let arr=nums2.slice(i);
        let val=arr.find((sel)=>{return el<sel;});
        return val===undefined?-1:val;
    });
};
