/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length==0){
        return null;
    }
    
    let node=preorder.shift();
    let i=inorder.indexOf(node);
    let [left,right]=[,];
    
    left=inorder.slice(0,i);
    right=inorder.slice(i+1);
    
    return new TreeNode(node,
                        buildTree(preorder, left),
                        buildTree(preorder,right));
    
   
    
};
