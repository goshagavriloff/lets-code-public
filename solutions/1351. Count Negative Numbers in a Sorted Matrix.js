/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let str=grid.toString();
    let result=str.match(/-\d+/g);
    return result==null?0:result.length;
};
