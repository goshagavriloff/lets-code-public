/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
​
    if (palindrome.length==1){return '';}
    
    
    let a=palindrome.slice();
    
    let result=a.replace(/[^a]/,'a');
    if (isPalindrome(result)){
        result=a.replace(/\w$/,'b');
        
    }
    return result;
    
};
​
let isPalindrome=(str)=>{
    let len=str.length;
    let size=( len + ( len %  2 ) )/ 2; 
    let a=str.slice(0,size);
    let b=str.slice(-size);
    
    return a==b.split('').reverse().join('');
}
​
