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
var deepestLeavesSum = function(root) {
  let data={};
  let result=0;
  let level=0;
  let queue=[{root,level}].filter(queueFilter);
    
  while(queue.length!=0){
    
      let cursor=queue.shift();
      let node=cursor.root;
      let nodeLevel=cursor.level;
    
      [node.left,node.right].filter(nodeFilter).forEach((el)=>{
        
        let data={root:el,level:nodeLevel+1};
        queue.push(data);
        
      });
    
    if (data[nodeLevel]==null){
      data[nodeLevel]=[];
    }
    
    data[nodeLevel].push(node.val);
    
  }
  Object.values(data).pop().forEach((el)=>{
    result+=el;
  });
  return  result;
