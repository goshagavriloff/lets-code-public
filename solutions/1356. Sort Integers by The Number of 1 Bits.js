/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let obj={};
    arr.forEach((el,i)=>{
        let quest=el.toString(2).match(/1/g);
        let key=quest!=null?quest.length:0;
        obj[key]=obj[key]==undefined?[]:obj[key];
        obj[key].push(el);
        
    });
    let result=Object.values(obj).map((el)=>{
        return el.sort((a,b)=>{return a-b});
    }).reduce((acc,val)=>{
        return acc.concat(val);
    },[]);
   // console.log(obj);
    return result;
};
