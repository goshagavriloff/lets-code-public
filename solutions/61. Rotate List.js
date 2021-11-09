/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head==null){return head}
    
    let arr=[];
    
    while (head!=null){
        arr.push(head.val);
        head=head.next;
    } 
    
    let size=arr.length;
    let count=(size<=k)?k%size:k;
    let pre=arr.splice(-count,count);
    
    [arr,pre]=[arr,pre].map((el)=>{return el.reverse()});
    [arr,pre].forEach((el)=>{
        el.forEach((val)=>{
            let node=new ListNode(val);
            node.next=head;
            head=node;
        });
    });
    return head;
};
