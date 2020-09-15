/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr=s.match(/[aeiou]/gi);
    
    return arr!=null?getResult(s,arr):s;
};
​
let getResult=(s,arr)=>{
    
    let res=s.replace(/[aeiou]/gi,'a').split('');
    let result=res.map((el)=>{
        let ver=el;
        if (el=='a'){
            ver=arr.pop();
        }
        return ver;
    }).join('');
    
    console.log(result);
    return result;
    
    
}
