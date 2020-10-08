/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str=num.toString();
    if (str.length==1){
        return num;
    } else {
        let result=str.split('').reduce((acc,val)=>{return parseInt(val)+acc;},0);
        return addDigits(result);
    }
    
};
