/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result=[];
    let size=getObjSize(s.length,p.length);
    let max=size.s-size.p;
​
    for (let i=0;i<=max;i++){
    
        let check=s.slice(i,i+size.p);
        isAnagram(check,p)&&result.push(i);
    
    }
    
    return result;
};
​
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
