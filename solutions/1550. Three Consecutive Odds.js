/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    
    let str=arr.join(',')+',';
    return str.match(/((\d{0,}[13579]),){3}/g)!=null;
};
