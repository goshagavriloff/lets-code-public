/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let k=((dividend>=0)&&(divisor>0))||((dividend<=0)&&(divisor<0))?1:-1;
    
    dividend=Math.abs(dividend);
    divisor=Math.abs(divisor);
    
    let result=(Math.log2(dividend)-Math.log2(divisor));
    result=Math.pow(2,result);
    
    result=Math.floor(result);
    return divisor!=1?getValid(result*k):getValid(dividend*k);
​
​
};
​
let getResult=(res)=>{
    
        let arr=res.toString().match(/\S+(?=\.)/g);
​
        return arr!=null?getValid(arr[0]):getValid(res);
    }
​
let getValid=(el)=>{
        let limit={
            'min':-Math.pow(2,31),
            'max':Math.pow(2,31)-1
        };
        let result=el;
​
        result=(result<limit.min)?limit.min:result;
        result=(result>limit.max)?limit.max:result;
​
        return result;
    
}
​
