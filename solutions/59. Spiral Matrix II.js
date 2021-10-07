/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let row=Array.from({length: n}, (v, i) => null);
    let grid=Array.from({length: n}, (v, i) => row);
    let cols=Array.from({length: n**2}, (v, i) => i+1);
    let i=grid.findIndex(searchNull);
    while (i!=-1){
        grid[i]=grid[i].map((el)=>{
            return el==null?cols.splice(0,1):el;
        });
        grid=transformGrid(grid);
        i=grid.findIndex(searchNull);
    }
    while (grid[0][0]!=1){
        grid=transformGrid(grid);
    }
    return grid;
};
let transformGrid=(grid)=>{
    return grid.map((row,i)=>{
        return row.map((col,j)=>{
            return grid[j][i];
        })
    }).reverse();
}
let searchNull=(row,i,arr)=>{
    return row.some((col)=>{return col==null});
}
