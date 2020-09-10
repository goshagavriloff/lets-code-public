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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    //Ищем через рекурсию!!!
   let arr=recPathSum(root);
    return arr!=null?arr.includes(sum):false;
   
};
​
let recPathSum=(el,s=0)=>{
    if (el==null){
        return el;
        } else {
        s+=el.val;
        
            let left=recPathSum(el.left,s);
            let right=recPathSum(el.right,s);
            
            let isValid=(left==null)&&(right==null);
            let result=isValid?[s]:[left,right];
        return reduceTree(result);
    }
}
​
let reduceTree=(arr)=>{
    return arr!=null?arr.reduce((acc,val)=>{
        return acc.concat(val);
    },[]):null;
}
