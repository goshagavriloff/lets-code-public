/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr=(s!='')?s.match(/\S+/g):'';
    let result=(arr!=null)?arr.reverse().join(' '):s;
    return result;
};
