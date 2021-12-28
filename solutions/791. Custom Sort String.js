/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let result=s.split('');
    result.sort((a,b)=>{
        return order.indexOf(a)-order.indexOf(b);
    });
    return result.join('');
};
