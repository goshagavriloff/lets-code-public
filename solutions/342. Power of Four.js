/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    let str=num.toString(2);
    let arr=str.match(/(?<=^1)(0+)\1$/g);
    let isValid=arr!=null?arr[0].length%2==0:false;
    
    return num==1?true:isValid;
};
