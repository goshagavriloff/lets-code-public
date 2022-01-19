/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let len = nums.length,
        subs = Array(Math.pow(2,len)).fill();
    let arr= subs.map((_,i) => { 
        var j = -1,
            k = i,
            res = [];;
        while (++j < len ) {
            k & 1 &&(res.push(nums[j]));
            k = k >> 1;
      }
      return res.sort().join(',');
  });
    let set=new Set([...arr]);
    
    return [...set].map(str=>str==''?[]:str.split(','));
}
