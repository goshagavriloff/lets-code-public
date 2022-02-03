/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
​
    let size=getObjSize(s1.length,s2.length);
    let max=size.p-size.s;
    for (let i=0;i<=max;i++){
    
        let check=s2.slice(i,i+size.s);
        if (isAnagram(check,s1)){
            return true;
        }
    
    }
    
    return false;
};
​
let isAnagram = function(s, t) {
    const arr = new Array(26).fill(0);
    if(s.length!==t.length) return false;
    for(let i=0;i<s.length;i++){
        const tCode = t[i].charCodeAt();
        const sCode = s[i].charCodeAt();
        arr[tCode-97]++;
        arr[sCode-97]--;
    }
    
        for(let i=0;i<arr.length;i++){
        if(arr[i]!==0) return false;
    }
    
    
    return true;
};
         
let getObjSize=(s,p)=>{
    return {s,p};
}
