/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let isValid=s.match(/(\w)\1{1,}/g)!=null;
    
    return isValid?s.match(/(\w)\1{1,}/g)
                    .sort((a,b)=>{
                            return b.length-a.length;
                        }                        
                         )[0].length:1;
};
