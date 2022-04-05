/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let list=null;
    let result=null;
    let sum=0;
    while (head!=null){
        let {val,next}=head;
        let isValid=(val==0)&&next!=null;
        if (isValid){
            let node=new ListNode(0,list);
            list=node;
            
        }
        list.val+=val;
        head=head.next;
    }
    while (list!=null){
        let {val,next}=list;
        let node=new ListNode(val,result);
        result=node;
        list=list.next;
    }
    
    return result;
};
