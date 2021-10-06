/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums=nums.sort((a,b)=>{return a-b});
    let str=nums.join(',')+',';
    let result=str.match(/(\d+,)\1/g);
    return  result==null?
            []:
            result.map((el)=>{
                return el.split(',')[0]
            });
};
