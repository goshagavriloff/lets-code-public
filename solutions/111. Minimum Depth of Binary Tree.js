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
var minDepth = function(root) {
    let arr=recArr(root)
    .filter((el)=>{return el!=-1});
    return root==null?0:arr.sort((a,b)=>{return a-b;})[0];
};
let recArr=(root,val=1)=>{
   if (root==null){
        return [-1];
        }
    if (root.left==null&&root.right==null){
        return [val];
        } else {
            return []
                    .concat(recArr(root.left,val+1))
                    .concat(recArr(root.right,val+1));
        }
    
}
