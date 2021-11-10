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
    let i=0;
    let next=0;
    let result=null;
    
    [l1,l2]=[l1,l2].map((list)=>{
        return transformList(list);
    });
    [l1,l2]=[l1,l2].sort((a,b)=>{return b.length-a.length});
    
    while(l2.length!=l1.length){
        l2.push(0);
    }
