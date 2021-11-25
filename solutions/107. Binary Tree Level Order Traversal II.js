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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let data={};
    let queue=[getDataRoot(root,0)];
    
    if (root==null){return []}
    
    while(queue.length!=0){
        let cursor=queue.pop();
        let {node,level}=cursor;
        let {left,right,val}=node;
        
        data[level]=data[level]!=null?data[level]:[];
        data[level].unshift(val);
        
        [left,right].forEach((branch)=>{
            branch!=null&&queue.push(getDataRoot(branch,level+1));   
        });
    }
    
    return Object.values(data).reverse();
};
    
let getDataRoot=(node,level)=>{
    return {node,level};
}
​
​
​
