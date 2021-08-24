/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let isValid=(arr.length>=3);
    //console.log(calcMount(arr));
    return isValid?calcMount(arr)!=null:false;
};
​
let calcMount=(arr)=>{
    let result=arr.map((el,i)=>{
       return isNaN(arr[i+1])?null:
                el<arr[i+1]?1:
                el==arr[i+1]?0:-1; 
    }).filter((el)=>{
        return el!=null;
    }).join(' ')+' ';
    
    return result.match(/^(1 ){1,}(-1 ){1,}$/g);
}
