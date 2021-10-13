/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let arr=s.match(/\d/g);
    let obj=new Set(arr);
    
    let result=Array.from(obj).sort((a,b)=>{return b-a});
    
    return result[1]!=null?result[1]:-1;
};
