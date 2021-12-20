/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let arr=s.split('');
    while (spaces.length!=0){
        let cursor=spaces.pop();
        arr[cursor]=` ${arr[cursor]}`;
    }
    return arr.join('');
};
