/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let unique = nums.filter(onlyUnique);
     nums=nums.sort((a,b)=>{return a-b});
    let result=0;
​
    
    unique.forEach((element)=>{
        let count=getDouble(nums,element);
        let raz=count%2;
        while (raz!=0){
            result+=element;
            raz--;
        }
    });
    return result;
};
​
let onlyUnique=(value, index, self)=>{ 
    return self.indexOf(value) === index;
    
}
let getDouble=(arr,el)=>{
    i=0;
    arr.forEach((element)=>{
        if (element==el){
            i++;
        }
    });
    return i;
}
​
