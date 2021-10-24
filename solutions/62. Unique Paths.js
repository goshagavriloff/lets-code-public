/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m>=n){ 
        [m,n]=[n,m]; 
    }
    
    let step=m-2;
    let path=n+step;
    
    return calcComb(path,m-1);
    
};
let calcComb=(n,k)=>{
    return calcFactorial(n)/(calcFactorial(k)*calcFactorial(n-k));
}
​
let calcFactorial=(n)=>{
    let result=1;
    for (let i=1;i<=n;i++){
        result*=i;
    }
    return result;
}
