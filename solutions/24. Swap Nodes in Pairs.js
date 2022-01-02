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
var swapPairs = function(head) {
    let arr=[];
    let result=null;
    
    while (head!=null){
        arr.push(head.val);
        head=head.next;
    }
    for (let i=0;i<arr.length;i=i+2){
        let next=i+1<arr.length?i+1:i;
        [arr[i],arr[next]]=[arr[next],arr[i]];
    }
    
    while(arr.length!=0){
        let val=arr.pop();
        let node=new ListNode(val,result);
        result=node;
    }
    return result;
​
};
