/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result=words
    .sort((a,b)=>{return a.length-b.length})
     .reduce((acc,val,i)=>{
         let reg=new RegExp(val,'g');
        (words.slice(1+i).some((el)=>{return el.match(reg)!=null}))?acc.push(val):acc.push();
         return acc;
     },[]);
    return result;
};
