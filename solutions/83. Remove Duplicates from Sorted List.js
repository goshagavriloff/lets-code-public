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
    
        while ((head.next!=null)&&(head.val==head.next.val)){
            head=head.next;
        } 
    
​
    return new ListNode(head.val,deleteDuplicates(head.next));
};
