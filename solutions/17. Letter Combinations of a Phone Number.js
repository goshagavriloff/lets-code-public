/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    return digits.length>1?recCombo(digits):digits!=""?letters[digits]:[];
};
​
let letters={
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z']
}
​
let recCombo=(digits)=>{
    let arr=digits.split('').map((el)=>{return letters[el]});
    let result=arr.reduce((acc,val,i)=>{
        
        if (arr[i+1]==null) return acc;
        
        let temp=[];
        let cursor=acc[0]==null?val:acc;
        
        arr[i+1].forEach((el)=>{
            
            temp.push(cursor.map((e)=>{return e+el}));
        });
        return temp.flat();
    },[]);
    return result;
}
​
​
