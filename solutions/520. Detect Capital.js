/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    console.log();
    let isBigCapital=word.match(/^(\p{Lu}+)$/gu)!=null;
    let isStandartCapital=word.match(/^(\p{Ll}+)$/gu)!=null;
    let isSmallCapital=word.match(/^(\p{Lu})(\p{Ll}+)$/gu)!=null;
    
    let isValid=isBigCapital||isStandartCapital||isSmallCapital;
    
    return isValid;
};
