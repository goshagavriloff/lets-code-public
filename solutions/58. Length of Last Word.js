/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr=s.match(/\S+/g);
    let isValid=arr!=null;
    
    return isValid?arr.reverse()[0].length:0;
};
