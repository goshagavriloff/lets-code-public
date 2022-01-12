/**
 * @param {number} n
 * @return {number}
 */
​
var countPrimes = function(n) {
    let result=0;
    let arr=[];
    
    arr.length=n;
    arr.fill(true);
    arr[0]=false;
    arr[1]=false;
    
    for (let i=2;i<n;++i){
        if (arr[i]){
            for (let j = 2*i; j <= n; j += i){
                arr[j] = false;
            }
            result++;
        }
    }
    
    return result;
​
};
​
