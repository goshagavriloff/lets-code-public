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
    [l1,l2]=[l1,l2].map((branch)=>{
        let str='';
        while (branch!=null){
            str+=branch.val;
            branch=branch.next;
        }
        return BigInt(str);
    });
    
    let sum=l1+l2;
    let result=null;
    
    let arr=sum.toString().split('');
    
    while (arr.length>0){
        let cursor=arr.pop();
        let node=new ListNode(cursor,result);
        result=node;
    }
    return result;
};
