/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let size=Math.pow(2,n);
    let result=Array.from({ length: size }).map(fillBinCode);
    
    result=result.map((n==1)?fillNumber:fillGrayCode);
    
    return result;
};
let fillBinCode=(el,i,arr)=>{
    let str=i.toString(2);
    let a= Math.log2(arr.length);
    let b= str.length;
    let mask='0'.repeat(a-b);
    
    return `${mask}${str}`;
}
let fillGrayCode=(el)=>{
    let arr=el.split('');
    let init=0;
    arr.forEach((item,i)=>{
        arr[i]=init^item;
        init=item;
    });
    let strGray=arr.join('');
    
    return parseInt(strGray, 2);
}
let fillNumber=(el)=>{
    return Number(el);
}
​
