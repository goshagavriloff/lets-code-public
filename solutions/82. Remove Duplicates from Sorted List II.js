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
var deleteDuplicates = function(head) {
  
    if (head ==null){
        return null;
    }
  
    let count=0;
    let val=head.val;
  
    while ((head.next!=null)&&(head.val==head.next.val)){
            head=head.next;
            count++;
    } 
  
    if ((head!=null)&&(head.val==val)&&(count>0)){
      head=deleteDuplicates(head.next);
    }
    if (head ==null){
        return null;
    }
    return new ListNode(head.val,deleteDuplicates(head.next));
};
