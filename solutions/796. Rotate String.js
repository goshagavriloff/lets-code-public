/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    let result=A==B;
    let check=shiftString(A);
    while (check!=A){
        result=check==B?true:result;
        check=shiftString(check);
    }
    return result;
};
let shiftString=(s)=>{
    let arr=Array.from(s);
    let remove=arr.shift();
    arr.push(remove);
    return arr.join('');
}
