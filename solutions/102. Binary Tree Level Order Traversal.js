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
var levelOrder = function(root) {
    let arr=recArr(root);
    if (arr==null){
        return [];
    }
​
    let result=arr
                .filter((el)=>{return el!=null})
                .reduce((acc,item,arr)=>{
                    let index=item.depth;
                    acc[index]=(acc[index]==null)?[]:acc[index];
                    acc[index].push(item.val);
                    return acc;
                },[]);
    return result;
};
let recArr=(root,depth=0)=>{
    if (root==null){
        return null;
        }
    let result={
        'depth':depth,
        'val':root.val
    };
    return [result]
        .concat(recArr(root.left,depth+1))
        .concat(recArr(root.right,depth+1));
}
