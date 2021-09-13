/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let initCacl=(n%2==0)?2:1;
    let isCalcing=n>0;
    while (isCalcing){
        n-=initCacl;
        initCacl*=4;
        isCalcing=n>0;
    }
    return n==0;
};
