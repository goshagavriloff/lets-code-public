/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function(n) {
    let str=`${n}`;
    let operations=['*','/','+','-'];
    let reg=/\d+[\*\/]\d+/g;
    
    for (let i=n-1;i>0;i--){
        let cursor=operations.shift();
        operations.push(cursor);
        str+=cursor+i;
    }
    
    while (reg.test(str)){
        str=str.replace(reg,(s)=>{return Math.floor(eval(s))});
    }
    
    return eval(str);
};
