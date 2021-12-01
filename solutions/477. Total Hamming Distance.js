/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let result=0;
    for (let i=0;i<nums.length;i++){
        let cursor=nums[i];
        for (let j=0;j<nums.length;j++){
            if ((j>i)&&(i!=j)){
                let checked=nums[j];
                result+=calcHamming(cursor,checked);
                }
        }
        
    }
    return result;
};
let calcHamming=(a,b)=>{
    let xor = a^b;
    let result=0;
    while(xor != 0) {
        xor &= (xor - 1);
        result++;
    }
    return result;
}
​
