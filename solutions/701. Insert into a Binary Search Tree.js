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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let queue=[root].filter(x=>x!=null);
    let order=[val];
    
    while (queue.length!=0){
        
        let cursor=queue.shift();
        let {val,left,right}=cursor;
        
        order.push(val);
        
        [left,right].forEach((branch)=>{
            branch!=null&&queue.push(branch);
        });
    }
    return setBSTData(order);
    
};
let setBSTData=(order)=>{
        if (order.length==0){
        return null;
    }
    let val=order.shift();
    let left=order.filter((x)=>{return x<val});
    let right=order.filter((x)=>{return x>val});
    return new TreeNode(val,setBSTData(left),setBSTData(right));
}
