/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr=nums1.concat(nums2);
    let size=arr.length;
    
    let a=(size==1)?0:Math.floor(size/2);
    let b=(size%2==0)?a-1:a;
    
    arr=arr.sort((a,b)=>{return a-b});
        
    return (arr[a]+arr[b])/2;
    
};
