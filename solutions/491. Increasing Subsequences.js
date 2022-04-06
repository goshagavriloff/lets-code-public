/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let first=nums[0];
    let queue=[setQueue([first],0)];
    let map=new Set();
    let result=[];
    
    while (queue.length!=0){
        let cursor=queue.pop();
        let {value,index}=cursor;
        let last=value.at(-1);
        
        for (let i=index+1;i<nums.length;i++){
            
            queue.push(setQueue([nums[i]],i));
            if (nums[i]>=last){
                let temp=[...value,nums[i]];
                queue.push(setQueue(temp,i));
                
                map.add(temp.join(','));
                
            }
        }
        
    }
     result=[...map].map(el=>el.split(','));
    return result;
};
let setQueue=(value,index)=>{
    return {value,index};
}
