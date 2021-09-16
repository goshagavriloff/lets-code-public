/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    
    keysPressed=keysPressed.split('').reduce((acc,key,i)=>{
        let curTime=releaseTimes[i];
        let val=(i==0)?curTime:curTime-releaseTimes[i-1];
        if (acc.has(key)){
            let checkVal=acc.get(key);
            val=checkVal>val?checkVal:val;
        }
        return acc.set(key, val)
    },new Map());
    
    keysPressed=[...keysPressed.entries()]
                .sort(sortByKey);
    return keysPressed[0][0];
};
​
let sortByKey=(a,b)=>{
    let isEqual=(b[1]-a[1]==0);
    if (isEqual){
        return getSub(a[0],b[0])
    }
    return b[1]-a[1];
}
​
let getSub=(a,b)=>{
    return b.charCodeAt(0)-a.charCodeAt(0);
}
