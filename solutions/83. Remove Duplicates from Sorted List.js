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
    console.log(recDuplicate(head));
};
​
let recDuplicate=(root,result=new ListNode())=>{
    if (root.next==null){
        return root;
    }
    
    result.val=root.val;
    while (root.next!=null){
        root.next=root.next;
    }
    
    result.next=recDuplicate(root.next);
    return result;
}
​
​
