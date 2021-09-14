/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s,k=1){
    s=`(${s})`;
    let isValid=s.match(/(?<=^\({0,})[+-]{0,}\d+(?=\){0,}$)/g);
    if (isValid){
        return parseInt(isValid[0])*k;
    }
    let str=s.replace(/\s+/g,'').replace(/\([\d+-]+\)/g,(match)=>{
      
        return calcMatch(match);
    }).replace(/--/g,"+");
  //  console.log(str);
    return calculate(str);
};
​
let calcMatch=(str)=>{
    let regexp = /\d+/g;
    let acc=0;
    while (parser = regexp.exec(str)) {
        let offset=parser.index;
        let val=parser[0];
        let k=(offset==0)?1:str[offset-1]=='-'?-1:1;
        acc+=k*parseInt(val);
        
    }
    return acc;
}
