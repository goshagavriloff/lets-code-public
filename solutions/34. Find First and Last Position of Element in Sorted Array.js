/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let regexp=new RegExp(','+target,'g');
    let str=','+nums.join(',')+',';
    
    let all=getArr(str,/,(-?)\d+/g);
    let arr=getArr(str,regexp);
    
    return arr[0]!=null?getRes(arr,all):[-1,-1];
​
};
let getArr=(str,regexp)=>{
        let arr=[];
    
    let result;
​
    while (result = regexp.exec(str)) {
      arr.push(result.index);
    }
    return arr;
}
let getRes=(arr,all)=>{
    return [
        all.indexOf(Math.min(...arr)),
        all.indexOf(Math.max(...arr)),
    ];
}
