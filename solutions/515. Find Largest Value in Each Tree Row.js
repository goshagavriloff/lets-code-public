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
var largestValues = function(root) {
    if (root==null){return []}
    let result=[];
    let queue=[setNodeQueue(root,0)];
    
    while (queue.length!=0){
        
        let cursor=queue.shift();
        let {node,level}=cursor;
        let {left,right,val}=node;
        
        if (result[level]==null){result[level]=Number.MIN_SAFE_INTEGER;}
        result[level]=getMaxLevel(val,result[level]);
        
        [left,right].forEach((branch)=>{
            branch!=null&&queue.push(setNodeQueue(branch,level+1));
        });
        
    }
    
    return result;
};
let setNodeQueue=(node,level)=>{
    return {node,level};
}
let getMaxLevel=(a,b)=>{
    return Math.max(a,b);
}
