/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {    
    let result=0;
    let map=new Map();
    
    for (let i=0;i<nums.length;i++){
        
        let temp=rev(nums[i]);
        let old=map.has(temp)?map.get(temp):0;
        map.set(temp,old+1);
        
    }
    
    map.forEach((value)=>{
        result+=calcCombo(value);
    });
    
    return result%(1e9 + 7);
};
​
let rev=(a)=>{
        let b=a;
        let c=0;
        while (a > 0) {
         
          c=10*c+a%10;
          a= Math.floor(a/10);
        }
        return b-c;
}
let calcCombo=(n,k=2)=>{
    if ((k == 0) || (k == n)){
        return 1;
    }
    return calcCombo(n - 1, k - 1) * n / k;
}
​
​
