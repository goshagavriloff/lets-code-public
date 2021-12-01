/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let result=0;
    let queue={};
    let keys=[...nums.keys()];
    for (let i=0;i<nums.length;i++){
        
        queue[i]=queue[i]==null?[i]:queue[i];  
        
        keys.filter(x => !queue[i].includes(x))
            .forEach((key)=>{
                result+=calcHamming(nums[key],nums[i]);
                queue[i].push(key);
                queue[key]=queue[key]==null?[key]:queue[key]; 
                queue[key].push(i);
            
        });
    
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
