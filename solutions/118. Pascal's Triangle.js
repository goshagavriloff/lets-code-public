/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result=getArrByNums(numRows)
                .map((el,i)=>{
                    return getArrByNums(i+1).fill(1);
                })
                .map((el,i,arr)=>{
                    
                    let prev=arr[i-1];
                    
                    if (prev==null||i<2){
                        return el;
                    }
                    
                    for (let j=1;j<el.length-1;j++){
                        let [a,b]=[prev[j-1],prev[j]];
                        el[j]=a+b;
                        
                           
                    }
                    return el;
                })
    ;
    
    
    return result;
    
};
​
let getArrByNums=(num)=>{
    let result=[];
    result.length=num;
    return result.fill([]);
}
​
