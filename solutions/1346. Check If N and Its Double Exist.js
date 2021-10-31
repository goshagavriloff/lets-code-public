/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let copy=arr.slice();
    return arr.some((el,i)=>{
        return copy
            .filter((clon,j)=>{return i!=j})
            .includes(el*2);
    });
};
