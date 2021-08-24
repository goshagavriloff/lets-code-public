/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result=words.filter((el)=>{
        let regStr=new RegExp('^['+allowed+']+$','g');
        //console.log(regStr);
        return el.match(regStr)!=null;
    }).length;
    return result;
};
