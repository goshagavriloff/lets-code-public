/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let arr=s.match(/\w+/g);
    
    let maxWord=arr.slice().sort((a,b)=>{return b.length-a.length});
    let maxLength=maxWord[0].length;
    
    let result=Array.from({length:maxLength}).fill('');
    
    arr.forEach((word)=>{
        
        let letters=word.split('');
        
        for (let i=0;i<result.length;i++){
            
            let char=letters.shift();
            result[i]+=(char==null)?' ':char;
        }
    });
    
    for (let i=0;i<result.length;i++){
        
      result[i]=result[i].replace(/\s+$/g,'');
        
    }
    
    return result;
};
​
