/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                       1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
​
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n,min=0) {
​
    let middle=Math.round((min+n)/2);
    let check=guess(middle);
    let isValid=check==0;
    
    if (isValid){
        return middle;
    }
    return check==-1?guessNumber(middle):guessNumber(n,middle);
    
        
};
