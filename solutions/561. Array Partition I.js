/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let result=0;
    nums=nums.sort((a,b)=>{return a-b});
    for (let i=0;i<nums.length;i=i+2){
        let [a,b]=[i,i+1].map((el)=>{return nums[el]});
        result+=a<b?a:b;
    }
    return result;
};
