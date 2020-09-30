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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let arr=recArr(root);
    return arr.reduce((acc,val)=>{return acc+val},0);
};
let recArr=(root,branch='')=>{
    if (root==null){
        return [0];
        }
    if (root.left==null&&root.right==null){
        
        return (branch=='left')?[root.val]:[0];
        }
    else{
       // console.log(root.left,root.right);
        return []
                .concat(recArr(root.left,'left'))
