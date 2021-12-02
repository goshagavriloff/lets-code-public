/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result=[];
    let size=nums.length;
    if (size==1){return [nums];}
    
    for (let i=1;i<nums.length;i++){
        size*=i;
    }
    
    result = [...generatePermutate(nums,size)];
    
    return result;
};
​
function* generatePermutate(nums,size){
    let rules=[];
    for (let i=0;i<size;i++){
        
        let i=nums.length-2;
        let j=nums.length-1;
        
        for (;i>=0;i--){
            if (nums[i]<nums[i+1]){
                break;
            }
        }
        
        for (;j>=0;j--){
            if (nums[j]>nums[i]){
                break;
            }
        }
        
        [nums[i],nums[j]]=[nums[j],nums[i]];
        let arr=nums.slice(i+1).reverse();
        
        nums.splice(i+1, arr.length, ...arr);
        let cursor=nums.join(',');
        if (!rules.includes(cursor)){
            yield cursor.split(',').map(Number);
            rules.push(cursor);
        }
    }
}
