            
            while(i>0){
                
                check&=calcIsOddEven[mass[1]](el[i]);
                check&=calcIsIncr[mass[1]](el[i],el[i-1]);
                
                i--;
            }
            check&=calcIsOddEven[mass[1]](el[0]);
            
            return check;
        });
    });
    let isValidNode=arr[0][0]%2!=0;
    
    
    let isValid=isValidEven&&isValidOdd&&isValidNode;
    return isValid;
    
};
let calcIsOddEven={
    0:(a)=>{return a%2!=0},
    1:(a)=>{return a%2==0}
};
let calcIsIncr={
    0:(a,b)=>{return a>b},
    1:(a,b)=>{return a<b}
};
