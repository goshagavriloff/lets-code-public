/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    [word1, word2]=[word1, word2].map((el)=>{return el.join('')});
    return word1==word2;
};
