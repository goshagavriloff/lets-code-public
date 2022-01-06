/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
​
/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result=[];
    let queue=[setQueue(root,0)].filter(({node})=>{return node!=null});
    while (queue.length!=0){
        let cursor=queue.shift();
        let {node,level}=cursor;
        let {val,children}=node;
        
        (result[level]==null)&&(result[level]=[]);
        result[level].push(val);
        
        children.forEach((child)=>{
            (child!=null)&&queue.push(setQueue(child,level+1));
        });
    }
    return result;
};
let setQueue=(node,level)=>{
    return {node,level};
}
