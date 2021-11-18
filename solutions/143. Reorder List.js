/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let isLevel=false;
    let queue=[];
    let cursor=head;
    
    while (cursor!=null){
        queue.push(cursor.val);
        cursor=cursor.next;
    }
    while (head!=null){
        isLevel=!isLevel;
        head.val=(isLevel)?queue.shift():queue.pop();
        head=head.next;   
    }
};
​
