/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let letters=S.match(/\p{L}/gu);
    let res=S.split('').map((el)=>{
        
        return el.match(/\p{L}/gu)!=null?letters.pop():el;
    });
    return res.join('');
};
