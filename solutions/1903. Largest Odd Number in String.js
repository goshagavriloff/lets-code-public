/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let str=("0"+num).match(/[0-9]+[13579]/g);
    return str==null?'':str[0].replace(/^[0]+/g,'');
};
