/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let queue=[root];
    let order=[];
    while (queue.length!=0){
        let node=queue.pop();
        let {val,left,right}=node;
        order.push(val);
        [left,right].forEach((branch)=>{
            branch!=null&&queue.push(branch);
        });
    }
    order.sort((a,b)=>{return a-b});
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
