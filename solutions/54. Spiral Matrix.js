/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let isValid=matrix[0]!=null;
    let result=[];
    
    while (isValid){
        result=result.concat(matrix.shift());
        isValid=matrix[0]!=null;
        if (isValid){
            matrix=rotateMatrix(matrix);
        }
        
    }
    return result;
};
let rotateMatrix=(matrix)=>{
    let m = matrix   .length;
    let n = matrix[0].length;
    let result = [];
    
    for (let i=n-1;i>=0;i--){
        result.push([]);
        for (let j=0;j<m;j++){
            result[n-i-1].push(matrix[j][i]);
        }        
    }
    
    return result;
    
}
let createArray=(length)=>{
    return Array.from({ length: length });
}
