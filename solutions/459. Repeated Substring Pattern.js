/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let state=(s).match(/^(\w+)\1{1,}$/g)!=null;
    
    return state;
};
