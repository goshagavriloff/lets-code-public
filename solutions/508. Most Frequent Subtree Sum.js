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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    let map=new Map();
    let max=1;
    let getTreeSum=(root)=>{
        if (root!=null){
            let left=getTreeSum(root.left);
            let right=getTreeSum(root.right);
            let sum=left+root.val+right;
            let val=map.get(sum);
            val=val===undefined?0:val;
            max=Math.max(max,val+1);
            map.set(sum, val + 1);
            return sum;
        }
        return 0;
    }
    getTreeSum(root);
    let arr=[...map.entries()];
    let result=[];
    arr.forEach(([val,i])=>{
        i==max&&result.push(val);
    });
    return result;
    
};
​
​
