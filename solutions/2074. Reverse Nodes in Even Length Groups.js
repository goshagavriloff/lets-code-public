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
var reverseEvenLengthGroups = function(head) {
    let arr=[];
    let reduce=[];
    let result=null;
    
    while (head!=null){
        let {val,next}=head;
        arr.push(val);
        head=next;
    }
    
    let i=1;
    
    while (arr.length!=0){
        let temp=arr.splice(0,i);
        temp=(temp.length%2==0)?temp.reverse():temp;
        reduce.push(...temp);
        i++;
    }
    
    while (reduce.length!=0){
        let cursor=reduce.pop();
        let node=new ListNode(cursor,result);
        result=node;
    }
    return result;
    
};
