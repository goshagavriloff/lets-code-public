/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let arr=getArr(n);
    
    let len=arr.length;
    let sub=32-len;
    
    let str=arr.join('')+('0').repeat(sub);
    
    let result=str.split('').reverse().reduce((acc,val,i)=>{
        return acc+val*(Math.pow(2,i));
    },0);
    
    return result;
};
let getArr=(n,arr=[])=>{
    if (n<2){
        return [n];
        } else{
            
            arr.push(n%2);
            return arr.concat(getArr(Math.floor(n/2)));
        }
}
​
​
