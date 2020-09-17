/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res=s.match(/\S+/g);
    return res!=null?getReverse(res):"";
};
​
let getReverse=(res)=>{
    return res.map((el)=>{return el.split('').reverse().join('')}).join(' ');
}
