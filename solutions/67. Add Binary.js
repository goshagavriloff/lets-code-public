/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let me=(a.length>b.length)?a:b;
    let other=(me==b)?a:b;
   
    [me,other]=[me,other].map(el=>el.split('').reverse().join(''));
    let sumArr=smCalc(me,other);
    return sumArr.join('');
};
​
let smCalc=(a,b,p=0)=>{
    if (a.length==0){
        return p==0?'':p;
    }
    let [s1,s2]=[parseInt(a[0]),parseInt(b[0])];
    let c=(!s1&!s2&p)|(!s1&s2&!p)|(s1&!s2&!p)|(s1&s2&p) ;
    let d=(s2&p)|(s1&p)|(s1&s2);
    
    [a,b]=[a,b].map(el=>el.slice(1));
    return [].concat(smCalc(a,b,d)).concat(c);
}
​
