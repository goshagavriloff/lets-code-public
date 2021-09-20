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
 * @return {boolean}
 */
var isValidBST = function(root,direct={left:[],right:[]}) {
    if (root==null){return true}
    let isValidLeft=    direct.left.every((el)=>{return root.val<el});
    let isValidRight=   direct.right.every((el)=>{return root.val>el});
    
    if (!(isValidLeft&&isValidRight)){
        return false;
    }
    let left,right;
    [left,right]=[left,right].map((branch,i)=>{
        
        let clone=JSON.parse(JSON.stringify(direct));
        let key=(i==0)?'left':'right';
        
        return changeDirect(clone,key,root.val);
    });
    
​
    [left,right]=[left,right].map((el,i)=>{
            
        return (i==0)?isValidBST(root.left,el):isValidBST(root.right,el);
     });
    
     return left&&right;
    
};
​
let changeDirect=(obj,key,val)=>{
    obj[key].push(val);
    return obj;
}
​
​
​
​
