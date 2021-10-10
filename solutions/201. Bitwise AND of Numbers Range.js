/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
​
    [m,n]=[m,n].map((el)=>{return el.toString(2)});  
    
    return m==n?parseInt(m,2):(m.length<n.length)?0:calcDisciples(m,n);
};
​
let calcDisciples=(m,n)=>{
    let size=m.length-1;
    let pattern=Math.pow(2,size);
    
    [m,n]=[m,n].map((el)=>{return parseInt(el,2)});
    let arr=Array.from({length: size}, (_, i) => m+Math.pow(2,i));
    
    arr=arr.filter((el)=>{return el>=m&&el<=n});
    arr.forEach((el)=>{m&=el;});
    
    return m&n;
}
