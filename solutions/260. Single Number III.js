/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let result=[];
    nums.forEach((el)=>{
        let i=result.findIndex((sel)=>{return sel==el});
        (i==-1)?result.push(el):result.splice(i,1);
    });
    return result;
};
