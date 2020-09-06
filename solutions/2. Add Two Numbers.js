/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr=[
        (getStringFromListNode(l1)),
        (getStringFromListNode(l2))
    ];
    let count=0;
    arr.sort((a,b)=>{
        count= Math.abs(b.length-a.length);
        return b.length-a.length;
    });
    
    arr[1]+="0".repeat(count);

    
    let sum=arr[0];
    let res=[];
    

    let saveDec=0;
    for (let i=0;i<sum.length;i++){
        let num=sum.length-1;
        
        let temp=(parseInt(sum[i])+parseInt(arr[1][i]));
        let dec=getSubUnit(temp);
        let check=getValidUnit(temp)+saveDec;
        
        dec+=getSubUnit(check);
        
        res.push(getValidUnit(check));
        
        saveDec=dec;
        
    }
    
    if (saveDec>0){
        res.push(saveDec);
    }
   return getResult(res);
};

let getValidUnit=(val)=>{
    return val>9?val%10:val;
}

let getSubUnit=(val)=>{
    return val/10<1?0:parseInt(val/10);
}


let getResult=(sum)=>{
    let result=new ListNode();
    let temp=result;
    
    sum.forEach((el,i)=>{
        temp.val=el;
        temp.next=sum[i+1]!=null?new ListNode():null;
        temp=temp.next;
    });
    return result;
}

let getStringFromListNode=(list)=>{
    if (list==null){
        return '';
        } else{
             return list.val+getStringFromListNode(list.next);
        }
}
let getReverse=(str)=>{
    return str.split('').reverse().join('');
}


