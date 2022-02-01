/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    let set=new Set();
    while (n!=0){
        let log=getBaseLog(3,n);
        log=Math.floor(log);
        
        if (set.has(log)){
            return false;
        }
        set.add(log);
        n-=Math.pow(3,log);
    }
    return true;
};
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
​
