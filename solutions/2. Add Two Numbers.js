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
    let i=0;
    let next=0;
    let result=null;
    
    [l1,l2]=[l1,l2].map((list)=>{
        return transformList(list);
    });
    [l1,l2]=[l1,l2].sort((a,b)=>{return b.length-a.length});
    
    while(l2.length!=l1.length){
        l2.push(0);
    }
    
    while (l2.length!=0){
        let a=l2.shift();
        let b=a+next;
        b+=l1[i];
        next=parseInt((b>9)?b/10:0);
        l1[i]=(b>9)?b%10:b;
        i++;
    }
    
    if(next>0){
        l1.push(1);
    }    
    
    
    
    while (l1.length!=0){
        let temp=l1.pop();
        let node=new ListNode(temp,result);
        result=node;
    }
    return result;
    
}
let transformList=(list)=>{
    let result=[];
    while (list!=null){
        result.push(list.val);
        list=list.next;
    }
    return result;
    
}
