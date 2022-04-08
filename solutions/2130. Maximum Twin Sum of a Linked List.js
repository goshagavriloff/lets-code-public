/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let reverse=null;
    let node=head;
    let size=0;
    let result=-1;
    
    while (node){
        
        let {val,next}=node;
        let temp=new ListNode(val,reverse);
        
        size++;
        reverse=temp;
        node=next;
    }
   
    size=size>>1;
    
    for (let i=0;i<size;i++){
        let [a,b]=[reverse,head].map(x=>x.val);
        result=(a+b>result)?a+b:result;
        reverse=reverse.next;
        head=head.next;
    }
    return result;
};
