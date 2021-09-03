/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    return patterns
            .filter((el)=>{
                    let reg=new RegExp(el,'g')
                    return word.match(reg)
            })
            .length;
};
