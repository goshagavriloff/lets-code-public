/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head==null){
        return head;
    }
    let order=[];
    while (head!=null){
        order.push(head.val);
        head=head.next;
    }
    let data=genPreorderData(order);
    return setBSTData(data);
};
let genPreorderData=(order)=>{
    let size=order.length;
    if (size==0){return [];}
    let i=size>>1;
    let mid=order.splice(i,1);
    let result=[];
    
    let [left,right]=[null,null].map((x)=>{
        return order.splice(0,i);
    });
    return [...mid,...genPreorderData(left),...genPreorderData(right)];
}
​
let setBSTData=(order)=>{
        if (order.length==0){
        return null;
    }
    let val=order.shift();
    let left=order.filter((x)=>{return x<val});
    let right=order.filter((x)=>{return x>val});
    return new TreeNode(val,setBSTData(left),setBSTData(right));
}
