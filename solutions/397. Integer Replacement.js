/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let map=[...getReplace(n)];
    let result=Math.min(...map);
    
    return result;
    
};
​
function* getReplace(n,step=0){
    if (n==1){
        yield step;
    } else {
        if (n%2==0){
            yield* getReplace(n/2,step+1);
        } else {
            yield* getReplace(n+1,step+1);
            yield* getReplace(n-1,step+1);   
        }
     
    }
​
}
