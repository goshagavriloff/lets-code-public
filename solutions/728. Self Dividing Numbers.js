/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let arr=[];
  
  for (let i=left;i<=right;i++){
      isValid(i)&&arr.push(i);
  }
  
  return arr;
};
let isValid=(num)=>{
  let letters=new Set(num.toString());
  let assertZero=!letters.has('0');
  let assertDiv=true;
  
  assertZero&&letters.forEach((el)=>{
    assertDiv&=num%el==0;
  });
  
  return assertZero&&assertDiv;
}
