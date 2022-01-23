/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let result=new Set();
    let str='123456789';
    
    let start=getNumLength(low);
    let end=getNumLength(high);
    
    for (let i=0;i<10;i++){
        for (let j=start;j<=end;j++){
            let sub=str.slice(i,i+j);
            sub>=low&&sub<=high&&result.add(sub);
        }
    }
    
    return [...result].sort((a,b)=>{return a-b});
    
    
    
};
​
let getNumLength=(val)=>{
    return val==0?1:Math.ceil(Math.log10(val + 1));
}
