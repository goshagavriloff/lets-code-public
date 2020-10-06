/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let spaces=text.match(/\s/g)!=null?text.match(/\s/g):[];
    let words=text.match(/\w+/g)!=null?text.match(/\w+/g):[];
    
    
    let count=Math.floor(spaces.length/(words.length-1));
  
    let result=words.reduce((acc,val,i)=>{
        return acc+val+((i==words.length-1)?"":" ".repeat(count));
    },'');
    
    let sub=text.length-result.length;
    
    result=(sub!=0)?result+' '.repeat(sub):result;
   
    return result;
};
