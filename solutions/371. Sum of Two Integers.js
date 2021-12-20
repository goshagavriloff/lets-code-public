/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let obj={
        a:getAbs(a),
        b:getAbs(b),
    };
    
    let max=(obj.a>obj.b)?a:b;
    let min=(obj.a<obj.b)?a:b;
    
    let [sizeMax,sizeMin]=[max,min].map(x=>getAbs(x));
    let result=genArr(sizeMax);
    
    let k=(max>=0)?1:-1;
    let isValid=checkSum(a,b);
    
    isValid&&result.splice(0,0,...genArr(sizeMin));
    !isValid&&result.splice(0,sizeMin);
    
    return result.length*k;
    
};
let checkSum=(a,b)=>{
    let result =[a,b].every(x=>x>=0);
    result|=[a,b].every(x=>x<=0);
    return result;
}
let genArr=(len)=>{
    return Array.from({length:len});
}
let getAbs=(a)=>{
    return Math.abs(a);
}
