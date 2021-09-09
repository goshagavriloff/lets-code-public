/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let check=target.charCodeAt(0);
    let result=letters.find((el)=>{
        el=el.charCodeAt(0);
        return el>check;
    });
    return result==undefined?letters[0]:result;
};
