/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let generator = check(n);
    let result=null;
    for (let i = 0; i < k; i++) {
        result=(generator.next().value);
    }
    
    let isValid=result!=null;
    return isValid?result:-1;
};
function * check(x) {
    for (let i = 1; i <= x; i++) {
        
        if (x%i==0){yield i;}
    }
    return ;
}
