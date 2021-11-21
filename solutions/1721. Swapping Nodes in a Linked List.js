/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let arr=[];
    while (head!=null){
        arr.push(head.val);
        head=head.next;
    }
    
    let [a,b]=[k-1,arr.length-k];
    [arr[a],arr[b]]=[arr[b],arr[a]];
    
    while (arr[0]!=null){
        let val=arr.pop();
        let node=new ListNode(val,head);
        head=node;
    }
    return head;
};
