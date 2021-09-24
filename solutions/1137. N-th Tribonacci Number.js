/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let [a,b,c]=[0,1,1];
    let size = parseInt(n/3);
    let i=n%3;
    
    for (let j=0;j<size;j++){
        a+=b+c;
        b+=c+a;
        c+=a+b;
    }
    
    return [a,b,c][i];
};
