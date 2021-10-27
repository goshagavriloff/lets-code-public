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
var sortList = function(head) {
    if (head==null){return null}
    let arr=[];
    let next;
    while (head!=null) {
            let {val}=head;
            arr.push(val);
            head = head.next;
        
    }
    arr=arr.sort((a,b)=>{return a-b});
    arr.forEach((val)=>{
        next=addItemList(next,val);
    });
    return next;
//     
    
};
let addItemList=(next,val)=>{
    let node=new ListNode(val);
    let current=next;
    if (next==null){
        return node;
    }
    while (current.next) {
            current = current.next;
    }
    current.next = node;
    return next;
    
}
​
​
