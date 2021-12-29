/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
​
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let queue=[setData(root,0)].filter(({node,level})=>{return node!=null});
    let result=[];
    
    while (queue.length!=0){
        let cursor=queue.shift();
        let {node,level}=cursor;
        let {left,right,val}=node;
        
        (result[level]==null)&&(result[level]=[]);
        
        if (result[level].length!=0){
            node.next=result[level].slice(-1)[0];
        }
        
        result[level].push(node);
        
        [right,left].forEach((branch)=>{
            branch!=null&&queue.push(setData(branch,level+1));
        });
    }
    
    return root;
};
let setData=(node,level)=>{
    return {node,level};
}
