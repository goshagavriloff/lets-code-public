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
var findBottomLeftValue = function(root) {
    let queue=[setDataTree(root,0)];
    let result={};
    while (queue.length!=0){
        let cursor=queue.shift();
        let {node,level}=cursor;
        let {left,right,val}=node;
        let isInValid=result[level]==null;
        
        result[level]=isInValid?[]:result[level];
        result[level].push(val);
        [left,right].forEach((branch)=>{
            branch!=null&&queue.push(setDataTree(branch,level+1));
        });
        
    }
    let lastLevel=Object.keys(result).pop();
    return result[lastLevel].shift();
};
​
let setDataTree=(node,level)=>{
    return {node,level};
}
