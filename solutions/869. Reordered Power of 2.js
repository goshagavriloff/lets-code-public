/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
    let str=N.toString();
    let cursor='1';
    let result=[];
    while (cursor.length<=str.length){
        isEqualLength(cursor,str)&&result.push(getSortNum(cursor));
        cursor*=2;
        cursor=cursor.toString();
    }
    str=getSortNum(str);
    return result.includes(str);
};
let isEqualLength=(a,b)=>{
    return a.length==b.length;
}
let getSortNum=(a)=>{
    return a.split('').sort().join();
}
