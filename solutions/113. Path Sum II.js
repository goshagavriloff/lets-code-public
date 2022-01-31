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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result=[];
    let queue=[setQueue(root,0,[])].filter((el)=>{return el.node!=null});
    while (queue.length!=0){
        let cursor=queue.pop();
        let {node,sum,path}=cursor;
        let {val,left,right}=node;
        let isValidSum=(sum+val)==targetSum;
        let isValidLeaf=(left===null) &&( right===null);
        
        isValidSum&&isValidLeaf&&result.push(path.concat(val));
        
        [left,right].forEach((branch)=>{
            branch!=null&&queue.push(setQueue(branch,sum+val,path.concat(val)));
        });
    }
    return result;
    
};
let setQueue=(node,sum,path)=>{
    return {node,sum,path};
}
