/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head==null){
        return null;
    }
    while ((head!=null)&&(head.val==val)){
        head=head.next;
    }
    let [nodeVal,nodeNext]=[null,null];
    
    if (head!=null){
        [nodeVal,nodeNext]=[head.val,head.next];
        return new ListNode(nodeVal,removeElements(nodeNext,val));
    }
    return head;
};
