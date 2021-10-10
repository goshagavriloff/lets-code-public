/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let result=[];
    let [m,n]=[matrix.length,matrix[0].length];
    
    matrix.forEach((row,i)=>{
        row.forEach((col,j)=>{
            if (col==0){
                result.push({i,j});
            }
        });
    });
    result.forEach((el)=>{
        let {i,j}=el;
        matrix[i].fill(0);
        matrix.forEach((row)=>{
            row[j]=0;
        });
    });
};
