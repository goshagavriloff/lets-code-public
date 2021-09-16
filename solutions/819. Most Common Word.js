/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let arr=paragraph.match(/\w+/gi);
    let result=getLowerArr(arr)
                    .filter((el)=>{return !banned.includes(el)})
                    .reduce((acc,val)=>{
                        acc[val]=(acc[val]==null)?1:acc[val]+1;
                        return acc;
                    },{});
    
    return Object.entries(result).sort((a,b)=>{return b[1]-a[1]})[0][0];
    
    
};
let getLowerArr=(arr)=>{
    return arr.map((el)=>{return el.toLowerCase()});
}
