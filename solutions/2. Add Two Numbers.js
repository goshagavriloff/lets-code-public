/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr=[
        (getStringFromListNode(l1)),
        (getStringFromListNode(l2))
    ];
    let count=0;
    arr.sort((a,b)=>{
        count= Math.abs(b.length-a.length);
        return b.length-a.length;
    });
    
    arr[1]+="0".repeat(count);
​
    
    let sum=arr[0];
    let res=[];
    
​
    let saveDec=0;
