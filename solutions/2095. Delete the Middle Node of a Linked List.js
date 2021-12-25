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
var deleteMiddle = function(head) {
    let queque=[];
    let result=null;
    while (head!=null){
        queque.push(head.val);
        head=head.next;
    }
    let mid=queque.length>>1;
    queque.splice(mid,1);
    while (queque.length!=0){
        let val=queque.pop();
        let node=new ListNode(val,result);
        result=node;
    }
    return result;
};
