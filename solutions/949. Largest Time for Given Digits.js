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
    }
    
    return arr;
}
​
let getMinutes=(numbers,s,i,j)=>{
    
    let result= numbers
                .filter((el)=>{
                    return (el!=i)&&(el!=j);
                })
                .reduce((acc,val)=>{
                    return acc.concat(s[val]);
                },[])
                .sort((a,b)=>{
                    return b-a;
                })
                .join('')   
                ;
    return parseInt(result)>59?result.split('').reverse().join(''):result;
    
}
