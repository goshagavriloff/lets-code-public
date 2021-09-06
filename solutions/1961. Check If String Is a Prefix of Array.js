/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    
    while (isValid(s,words)){
        s=s.slice(words[0].length);
        words.shift();
    }
    return s.length==0;
};
​
let isValid=(s, words)=>{
    return s==''?false:(s.indexOf(words[0])==0);
}
