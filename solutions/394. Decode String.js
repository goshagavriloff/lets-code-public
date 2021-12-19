/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let reg=/(?<count>\d+)\[(?<str>\w{1,})\]/g;
    while (reg.test(s)){
        s=s.replace(reg,(match,count,str)=>{
             return str.repeat(count);
        });   
    }
    return s;
};
