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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let arr=GetPreorderTree(root);
    let result=new Map();
    let value=0;
    let queue=[root];
    
    while(arr.length!=0){
        let key=arr.pop();
        value+=key;
        result.set(key,value);
    }
    
    while (queue.length!=0){
        let cursor=queue.pop();
        let {left,right,val}=cursor;
        
        cursor.val=result.get(val);
        [left,right].forEach((branch)=>{
            (branch!=null)&&queue.push(branch);
        });
    }
    return root;
    
    
};
​
let GetPreorderTree=(root)=>{
    if (root==null){
        return [];
    }
    let {val,left,right}=root;
    
    return [...GetPreorderTree(left),val,...GetPreorderTree(right)];
}
​
