/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let arr=[];
    let result=0;
    
    arr.push(...manakerAlgorithm(s,true));
    arr.push(...manakerAlgorithm(s,false));
    
    for (let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result;
};
​
let manakerAlgorithm=(s,isEven)=>{
    let n=s.length;
    let l = 0;
    let r = -1;
    
    let result=Array.from({length: n}, (x, i) => 0);
    let shift=isEven?0:1;
    let alt=isEven?1:0;
    
    
    for (let i=0; i<result.length; ++i) {
        
      let k = i>r ? alt : Math.min(result[l+r-i+shift], r-i+1);
      while (i+k < n && i-k-shift >= 0 && s[i+k] == s[i-k-shift])  ++k;
      result[i] = k;
      if (i+k-1 > r){
         l = i-k+alt;
         r = i+k-1; 
      }
        
    }
    return result;
}
​
