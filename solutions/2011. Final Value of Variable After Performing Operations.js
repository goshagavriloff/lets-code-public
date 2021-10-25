/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let result=0;
  operations.forEach((el)=>{
    result+=teemate[el];
  });
  return result;
};
let teemate={
  "--X":-1,
  "X--":-1,
  "++X":1,
  "X++":1
};
