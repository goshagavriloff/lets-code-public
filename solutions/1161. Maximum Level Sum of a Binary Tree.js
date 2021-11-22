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
var maxLevelSum = function(root) {
    let level=1;
    let queue=[{root,level}];
    let obj={};
    while (queue[0]!=null){
        let cursor=queue.pop();
        if (obj[cursor.level]==null){
            obj[cursor.level]=0;
        }
        obj[cursor.level]+=cursor.root.val;
        
        [cursor.root.right,cursor.root.left].filter((el)=>{
            return el!=null;
        }).forEach((el)=>{
            queue.push(createQueueElement(el,cursor.level+1));
        });  
    }
    let result=Object.entries(obj).sort(([a0,a1],[b0,b1])=>{return b1-a1});
    return result[0][0];
    
};
let createQueueElement=(root,level)=>{
    return {root,level};
}
​
