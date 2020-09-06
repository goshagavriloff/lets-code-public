/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
   
    let hours=getByCond(A);   
    let isValidHours=hours[0]!=null;
    
    return isValidHours?getTime(hours):"";
};
​
let getTime=(time)=>{
    time.sort((a,b)=>{
        return parseInt(b.hour)-parseInt(a.hour);
    });
    
    return time[0].hour+':'+time[0].minutes;
    
}
​
let getByCond=(s)=>{
    let arr=[];
    let numbers=[0,1,2,3];
    for (let i=0;i<s.length;i++){
        for (let j=0;j<s.length;j++){
            
            let hours=(s[i]+''+s[j]);
            let minutes=getMinutes(numbers,s,i,j);
            let isValid=(i!=j)&&(hours<24)&&(minutes<60);
            
            if (isValid){      
                
                arr.push({'hour':hours,'minutes':minutes});
            }
            
        }
