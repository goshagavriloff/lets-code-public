/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let nums=['1','2','3','4','5','6','7','8','9','0'];
  
    let result=s.split('').map((el,i)=>{
      return nums.includes(el)?calcLetter(s[i-1],el):el;
    });
  
    return result.join('');
  
};
let calcLetter=(prev,cur)=>{
  prev=prev.charCodeAt(0);
  cur=parseInt(cur);
  
  return String.fromCharCode(cur+prev);
}
