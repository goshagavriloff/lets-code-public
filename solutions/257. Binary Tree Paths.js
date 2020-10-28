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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  //console.log(root);
    return root!=null?recPath(root).filter((el)=>{return el!='';}):[];
};
​
let recPath=(root,path='')=>{
  if (root==null){
      return '';
      }  
  if ((root.left==null)&&(root.right==null)){
     return [path+root.val];
  } else {
      path+=root.val+'->';
      let left=recPath(root.left,path);
      let right=recPath(root.right,path);
      
       return []
          .concat(left)
          .concat(right);
  }  
}
