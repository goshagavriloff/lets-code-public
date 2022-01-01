/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let queue=Array.from({length:N},(v,e)=>{return (e+1)+''});
    let reg=/^[0182569]+$/g;
​
    let result=queue.filter((el)=>{
        let result=el.match(reg);
        if (result){
            let after=el.split('');
            after.forEach((item,i)=>{
              after[i]=replaceMap[item];
            });
            after=after.join('');
            return el!=after;
        }
        return result;
        
    });
    return result.length;
};
let replaceMap={
    '0':'0',
    '1':'1',
    '2':'5',
    '5':'2',
    '6':'9',
    '8':'8',
    '9':'6',
};
