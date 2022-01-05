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
var goodNodes = function(root) {
    let result=[];
    let queue=[setQueue(root,[])];
    let node=root.val;
    
    while(queue.length!=0){
        let cursor=queue.pop();
        let {node,path}=cursor;
        let {val,left,right}=node;
        
        let max=Math.max(...path);
        (val>=max)&&result.push(val);
        
        [left,right].forEach((branch)=>{
            let data=setQueue(branch,path.concat(val));
            branch!=null&&queue.push(data);
        });
    }
    
    return result.length;
};
​
let setQueue=(node,path)=>{
    return {node,path};
}
