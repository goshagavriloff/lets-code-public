/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let sum=0;
    let result='';
    
    shifts.reverse().forEach((el,i)=>{
        sum+=el;
        shifts[i]=sum;
    });
    
    for (let i=shifts.length;i>0;i--){
        let letter=s[s.length-i];
        let steps=shifts[i-1];
        result+=calcLetters(letter,steps);
    }
    return result;
};
​
let calcLetters=(letter,steps)=>{
    let num=letter.charCodeAt(0)+steps-97;
    let result=(num%26)+97;
    return String.fromCharCode(result);
}
