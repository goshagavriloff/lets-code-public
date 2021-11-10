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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let result=[];
    let arr=[];
    
    
    while (head!=null){
        arr.push(head.val);
        head=head.next;
    }
    
    let size=arr.length;
    let pre=size%k;
    let min=parseInt(size/k);
    
    for (let i=0;i<k;i++){
        let count=(pre>0)?min+1:min;
        let temp=arr.splice(0,count);
        
        temp=temp.reverse();
        result.push(temp);
        pre-=(pre>0);
    }
    
    result=result.map((el)=>{
        let tree=null;
        el.forEach((val)=>{
            let node = new ListNode(val,tree);
            tree=node;
        });
        return tree;
    });
    return result;
    
};
