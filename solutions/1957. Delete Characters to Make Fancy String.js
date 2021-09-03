/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    
    
    while (s.match(/(\w)\1{2}/g)){ 
        s=s.replace(/(\w)\1{2}/g,(match)=>{
            return match.slice(1);
        });
    }
    return s;
    
};
