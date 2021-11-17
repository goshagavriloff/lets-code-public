/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s=s.replace(/\s+/g,'');
    let reg_div=/(?<a>\d+)(?<i>[\*\/])(?<b>\d+)/;
    let reg_sum=/[\-]{0,}\d+/g;
    let result=0;
     while (reg_div.test(s)){
        s=s.replace(reg_div,(str, p1, p2, p3)=>{
            
            return calcStr[p2](p1,p3);
        });
    }
    let arr=s.match(reg_sum);
    arr.forEach((el)=>{
        result+=parseInt(el);
    });
    return result;
};
​
let calcStr={
    "+":(a,b)=>{return a+b},
    "-":(a,b)=>{return a-b},
    "*":(a,b)=>{return a*b},
    "/":(a,b)=>{return Math.floor(a/b)}
}
