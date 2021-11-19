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
 */
var BSTIterator = function(root) {
    this.root=root;
    this.result=[];
    for(let node of gen(root)) {
      this.result.push(node);
    }
};
​
/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.result.shift();
};
​
/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.result.length!=0;
    
};
function* gen(root) {
    if (root != null) {
        yield* gen(root.left);
        yield root.val;
        yield* gen(root.right);
    }
}
/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
