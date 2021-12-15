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
var insertionSortList = function(head) {
    let result=null;
    let arr=[];
    while (head!=null){
        arr.push(head.val);
        head=head.next;
    }
    arr.sort((a,b)=>a-b);
    while(arr.length!=0){
        let val=arr.pop();
        let node=new ListNode(val,result);
        result=node;
    }
    return result;
};
