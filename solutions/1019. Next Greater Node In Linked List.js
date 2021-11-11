/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let result=[];
    while(head!=null){
        result.push(head.val);
        head=head.next;
    }
​
    for (let i=0;i<result.length;i++){
        
        let temp=result.slice(i+1);
        let search=temp.find((num)=>{return num>result[i]});
        result[i]=search==undefined?0:search;
    }
    
    return result;
};
