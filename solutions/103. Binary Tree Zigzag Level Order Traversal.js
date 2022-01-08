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
var zigzagLevelOrder = function(root) {
    let result=[];
    let queue=[setQueue(root,0)].filter((x)=>x.node!=null);
    
    while (queue.length!=0){
        let cursor=queue.shift();
        let {node,level}=cursor;
        let {left,right,val}=node;
        
        (result[level]==null)&&(result[level]=[]);
        result[level].push(val);
        
        [left,right].forEach((branch)=>{
            (branch!=null)&&queue.push(setQueue(branch,level+1));
        });
    }
    return result.map((arr,i)=>{
        return (i%2==0)?arr:arr.reverse();
    });
};
let setQueue=(node,level)=>({node,level})
