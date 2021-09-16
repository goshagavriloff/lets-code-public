/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let copy=matrix[0].slice(0,-1).join(',');
    return matrix.every((el,i)=>{
        
        if(i==0){
            return true;
        }
        let temp=matrix[i].slice();
        matrix[i].shift();
        let isValid=copy==matrix[i].join(',');
        
        copy=temp.slice(0,-1).join(',');
        
        return isValid;
    });
};
