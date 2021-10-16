/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max=candies.slice().sort((a,b)=>{return b-a})[0];
  
    let result=candies.map((el)=>{
      return el+extraCandies>=max;
    });
  
  return result;
};
