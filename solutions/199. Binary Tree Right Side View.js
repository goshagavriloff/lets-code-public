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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let queue=[setData(root,0)];
    let result=[];
​
    if (root==null){return result}
    
    while (queue.length!=0){
        let cursor=queue.shift();
        let {node,level}=cursor;
        let {left,right}=node;
        
        result[level]=result[level]==null?[]:result[level];
        result[level].push(node.val);
        
        [left,right].forEach((branch)=>{
            (branch!=null)&&queue.push(setData(branch,level+1));
        });
    
    }
    
    return result.map((arr)=>{return arr.pop()});
    
};
let setData=(node,level)=>{
    return {node,level};
}
