/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let regexp = /(\w)\1{1,}/g;
    let matchAll = s.matchAll(regexp);
    
    let result=Array.from(matchAll).map((el)=>{
        
      let {index}=el;
      let {length}=el[0];
      let lastIndex=index+length-1;
      return [index,lastIndex];
        
    }).filter((el)=>{
      return getCalc(el)>=2;
    });
    
  return result;
};
​
let getCalc=(nums)=>{
  return nums[1]-nums[0];
}
