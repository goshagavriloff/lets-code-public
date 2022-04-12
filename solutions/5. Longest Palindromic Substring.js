/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //Manaker algorithm
    let arr= [];
    
    arr.push(...manakerAlgorithm(s,true));
    arr.push(...manakerAlgorithm(s,false));
    
    let size=Math.max(...arr);
    let i=arr.lastIndexOf(size);
    
    let isOdd=i<s.length;
    let shift= isOdd?0:s.length;
    let alt=isOdd?1:0;
    
    let middle=i-shift;
    let left=middle-size+alt;
    let right=middle+size;
    
    let result=s.slice(left,middle)+s.slice(middle,right);
    
    return result;
    
};
let manakerAlgorithm=(s,isOdd)=>{
    let n=s.length;
    let l = 0;
    let r = -1;
    
    let result=Array.from({length: n}, (x, i) => 0);
    let shift=isOdd?0:1;
    let alt=isOdd?1:0;
    
    
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
