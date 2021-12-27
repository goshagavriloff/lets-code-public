/**
 * @read https://habr.com/ru/sandbox/147286/
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let n=mat.length;
    let m=mat[0].length;
    
    let size=m+n-1;
    let path=Array.from({length:size},(v,e)=>{return []});
    let result=[];
    
    let isUp=true;
    
    for (let i=-(n-1);i<m;i++){
        for (let j=0;j<n;j++){
            let [row,col]=[j,i+j];
            isValidX(row,n)&&isValidX(col,m)&&path[i+n-1].push(mat[row][m-col-1]);
        }
    }
    
    while (path.length!=0){
        let cursor=path.pop();
        
        isUp&&cursor.reverse();
        result.push(...cursor);
        isUp=!isUp;
    }
    
    return result;
};
​
let isValidX=(x,size)=>{
    return (x>=0)&&(x<size);
}
