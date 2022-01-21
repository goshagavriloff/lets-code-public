/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max=0;
    if (s.length!=0){
        let prev=""; 
        for (let i=0;i<s.length;i++){
            let check=prev.indexOf(s[i]);
            let init=check==-1?0:check+1;
            prev=prev.slice(init)+s[i];
            max=Math.max(max,prev.length);
        }
    }
    return max;
};
