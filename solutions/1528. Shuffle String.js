/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res=indices.map((el,i)=>{
        return [el,s[i]];
    })
    .sort((a,b)=>{return a[0]-b[0]})
    .reduce((acc,val)=>{
        return acc+val[1];
    },"");
   // console.log(res);
    return res;
   // console.log(new Map(res));
};
