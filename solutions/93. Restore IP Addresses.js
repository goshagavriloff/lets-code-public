/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result=[];
    map.clear();
    
    for (let val=0;val<256;val++){
        let key=s.indexOf(val);
        let len =val==0?1:Math.ceil(Math.log10(val + 1));
        
         while(key!=-1){
            let i=key;
            let obj=[];
            if (map.has(key)){
                obj=map.get(key);
            }
            obj.push([val,len+key]);
             map.set(key,obj);
             key=s.indexOf(val,i+1);
         }
    }
    
    result=[...recMap(0)];
    
    return result.filter(str=>str.length==s.length+3);
    
​
};
let map=new Map();
​
function* recMap(i,step=1,prev=''){
    
    if ((step!=5)&&(map.has(i))){
        let start=map.get(i);
        for (let j=0;j<start.length;j++){
            let next=prev;
            next+=(prev=='')?'':'.';
            next+=+start[j][0];
            yield next;
            yield* recMap(start[j][1],step+1,next);
        }
    }
    
}
​
