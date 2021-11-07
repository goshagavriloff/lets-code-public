/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let result=[];
    let queues=[root1,root2].filter((el)=>{return el!=null});
    
    while (queues.length>0){
        
        let cursor=queues.shift();
        result.push(cursor.val);
        
        [cursor.left,cursor.right]
            .filter((el)=>{return el!=null})
            .forEach((el)=>{queues.push(el)});
    }
    
    return result.sort((a,b)=>{return a-b});
};
