/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    let k=[5,3,2,1];
​
    return num>0?recUgly(num,k):false;
    
    
};
​
let recUgly=(num,k)=>{
    let result=[num];
    while (!result.includes(1)){
        while (num%k[0]!=0){
                k.shift();
        }
        result.push(k[0]);
        num/=k[0];
​
    }
    result.push(num);
    return result.every((el)=>{
            return (((el%2==0||el%3==0||el%5==0)&&el!=1)||el==1)&&(el>0);
        });
}
