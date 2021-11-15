/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arr=matrix.flat(1);
    arr=arr.sort((a,b)=>{return a-b});
    
    return arr[k-1];
};
​
