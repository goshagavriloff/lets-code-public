/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let arr=word.match(/\d+/g);
    if (arr==null){
        return 0;
    }
    arr=arr.map((el)=>{return el.replace(/^0+/g,'');});
    return new Set(arr).size;
};
