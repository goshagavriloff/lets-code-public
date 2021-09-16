/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let alt=height.slice().reverse();
    let result=new Set();
    let twins=[height,alt];
    let size=height.length-1;
    
    for (let [i, arr] of twins.entries()){
        
        arr.forEach((el,j)=>{
            
            let owlIndex=size-getMyOwlIndex(el,size-j,twins[1-i]);
            let owl=arr[owlIndex];
            
            if (owl!=null){
                result.add(Math.min(el,owl)*(Math.abs(j-owlIndex)));
            }    
            
        });
    }
    return [...result.values()].sort((a,b)=>{return b-a})[0];
    
};
​
let getMyOwlIndex=(el,j,arr)=>{
    
    return arr.findIndex((s,i)=>{ return s>=el&&i!=j});
    
}
​
