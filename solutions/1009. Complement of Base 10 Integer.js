/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let str=N.toString(2);
    let arr=str.split('').map((el)=>{
        return (el==0)?1:0;
    });
    let result=arr.reverse().reduce((acc,val,i)=>{
        return acc+val*(Math.pow(2,i));
    },0);
    //console.log(str,arr);
    return result;
};
