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
var searchBST = function(root, val) {
    let arr=recBST(root,val).filter((el)=>{return el!=null});
   
    return arr!=null?arr[0]!=null?arr[0]:null:null;
};
​
let recBST=(root,val)=>{
​
    if ((root==null)||(root.val==val)){
        return [root];
        } else {
            return [].
                    concat(recBST(root.left,val))
                    .concat(recBST(root.right,val));
        }
}
