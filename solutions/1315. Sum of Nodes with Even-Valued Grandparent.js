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
var sumEvenGrandparent = function(root) {
    let queue=[root];
    let result=0;
    while (queue.length!=0){
        let cursor=queue.pop();
        let {val,left,right}=cursor;
        
        [left,right].forEach((branch)=>{
            if ((val%2==0)&&(branch!=null)){
                let [a,b]=[branch.left,branch.right];
                [a,b].forEach((el)=>{
                    result+=el==null?0:el.val;
                });
            }
            branch!=null&&queue.push(branch);
        });
    }
    return result;
};
​
