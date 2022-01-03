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
var countNodes = function(root) {
    let queue=[root].filter(x=>x!=null);
    let result=0;
    
    while (queue.length!=0){
        let cursor=queue.pop();
        let {val,left,right}=cursor;
        result++;
        [left,right].forEach((branch)=>{
            (branch!=null)&&queue.push(branch);
        });
    }
    return result;
};
