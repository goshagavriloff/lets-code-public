/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr=[];
    let n=rowIndex;
    
    if (rowIndex==0){return [1];}
    //C_n ^k=n!/(k!(n-k)!)
    for (let k=0;k<=n;k++){
        arr.push(kfCalc(n,k));
    }
    return arr;
};
let kfCalc=(n,k)=>{
    return (factCalc(n))/(factCalc(k)*factCalc(n-k));
}
​
let factCalc=(num)=>{
    let result=1;
    while (num>0){
        result*=num;
        num--;
    }
    return result;
}
​
​
