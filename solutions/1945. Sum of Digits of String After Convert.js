/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let result=s.split('').map((el)=>{
        return el.charCodeAt(0)-96;
    }).join('');
    
    while (k>0){
        result=getSum(result).toString();
        k--;
    }
    return result;
};
​
let getSum=(str)=>{
    let total=0;
    for (var i = 0, n = str.length; i < n; ++i)
    {
        total += parseInt(str[i]);
    }
    return total;
}
