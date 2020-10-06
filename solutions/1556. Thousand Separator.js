/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let str=n.toString();
    let len=str.length;
    let result=str
                .match(/\d/g)
                .reverse()
                .map((el,i)=>{
                    return ((i%3==0)&&(i!=0))?el+'.':el;
                })
                .reverse()
                .join('');
    return result;
};
