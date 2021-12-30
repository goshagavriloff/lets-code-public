/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj=new Map();
    for (let i=0;i<words.length;i++){
        let key=words[i];
        let value=(obj.get(words[i])==null)?0:obj.get(words[i]);
        obj.set(key,value+1);
        
    }
    let result=[...obj];
    
    result.sort((a,b)=>{
        if(a[1]==b[1]){
            return (a[0]).localeCompare(b[0]);
        }
        return b[1]-a[1];
    });
    return result.map(x=>x[0]).slice(0,k);
};
