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
var sumNumbers = function(root) {
    
    let level='';
    let queue=[createQueueElement(root,level)];
    let arr=[];
    let result=0;
    
    while (queue.length!=0){
        let cursor=queue.pop();
        let node=cursor.root;
        let {left,right,val}=node;
        let isValid=left==null&&right==null;
        let exalt=cursor.level+node.val;
        isValid&&arr.push(exalt);
        
        [left,right].forEach((el)=>{
            let newQueue=createQueueElement(el,exalt);
            (el!=null)&&queue.push(newQueue);
        }
    );
    }
    arr.forEach((el)=>{
        result+=1*el;
    });
    return result;
    
};
let createQueueElement=(root,level)=>{
    return {root,level};
}
​
​
