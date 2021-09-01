/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let me=(num1.length>num2.length)?num1:num2;
    let other=(me==num2)?num1:num2;
    
    [me,other]=[me,other].map(el=>el.split('').reverse().join(''));
    let sumArr=smCalc(me,other);
    return sumArr.join('');
    
    
};
​
let smCalc=(a,b,p=0)=>{
    if (a.length==0){
        return p==0?'':p;
    }
    let c=[a,b].map((el)=>{
        return (el=='')?0:parseInt(el[0]);
    })
    .reduce((acc,val)=>{
        return acc+val;
    },p);
    
    let d=parseInt(c/10);
    c=c%10;
    
    [a,b]=[a,b].map(el=>el.slice(1));
    
    return [].concat(smCalc(a,b,d)).concat(c);
}
​
​
