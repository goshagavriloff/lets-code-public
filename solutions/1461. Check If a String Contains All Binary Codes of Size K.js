/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let queue=[setQueue('',0)];
    
    while (queue.length!=0){
        let cursor=queue.pop();
        let {path,level}=cursor;
        if (level>k){
            continue;
        }
        if ((level==k)&&(s.indexOf(path)==-1)){
            return false;
        }
        let left= path+'0';    
        let right=path+'1';
        
        queue.push(setQueue(left,level+1));
        queue.push(setQueue(right,level+1));
        
    }
    return true;
};
let setQueue=(path,level)=>{
    return {path,level};
}
