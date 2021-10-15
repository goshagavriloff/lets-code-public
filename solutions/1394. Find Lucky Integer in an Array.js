/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  arr=arr.sort((a,b)=>{return b-a});
  
  let result=arr.find((el)=>{
    return el==getCount(el,arr);
  });
  
  return result===undefined?-1:result;
};
let getCount=(num,result)=>{
  return result.filter((el)=>{return el==num}).length;
}
