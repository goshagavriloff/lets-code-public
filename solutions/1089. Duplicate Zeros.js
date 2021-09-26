/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let len=arr.length;
    let keys=[];
    var idx = arr.indexOf(0);
    
    while (idx!=-1){
        keys.push(idx);
        idx = arr.indexOf(0, idx + 1);
    }
    
    keys.reverse().forEach((key)=>{arr.splice(key,0,0);});
    arr.length=len;
    
};
