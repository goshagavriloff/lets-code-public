/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let size = s.length;
    let middle  = 0.5*size;
    let [a,b]=[[0,middle],[middle,size]].map((el)=>{
        let str=s.slice(el[0],el[1]);
        let result=str.match(/[aeiou]/gi);
        return result==null?0:result.length;
    }); 
    return a==b;
};
