/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    let s=[0];
    for (let i=1;i<n;i++){
        let bufer=s.slice().map(el=>el==0?1:0);
        s.push(1,...bufer.reverse());
    }
    let result=s[k-1];
    
    return result.toString();
};
