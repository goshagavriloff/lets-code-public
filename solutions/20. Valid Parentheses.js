/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //return isValidCount(s)&&getAllValidOfS(s);
   // console.log(isValidParethes(s));
    return isValidParethes(s);
};
​
​
let isValidParethes=(s)=>{
    if (s==''){
        return true;
    } else {
        let arr=s.replace(/(\(\))|(\{\})|(\[\])/g,'');
     //   console.log(s,arr);
        return (s==arr)?false:isValidParethes(arr);
        
    }
}
​
