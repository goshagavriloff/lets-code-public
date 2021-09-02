/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    [firstWord, secondWord, targetWord]=[firstWord, secondWord, targetWord].map((el)=>{
        let str=el.split('').reduce((acc,val)=>{
            return acc.concat(val.charCodeAt(0)-97);
        },[]).join('');
        return parseInt(str);
    });
    return firstWord+secondWord==targetWord;
​
};
