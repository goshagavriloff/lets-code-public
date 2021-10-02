/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
   return arr.findIndex((el,i)=>{
       return arr[i]>arr[i+1];
   });
};
