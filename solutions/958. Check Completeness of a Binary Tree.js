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
var isCompleteTree = function(root) {
    let result=getTreeData(root);
    let size=result.length-1;
    let isValid=true;
    
    result.forEach((level,i)=>{
        let data=null;
        if (i<size){
            data=level.filter((el)=>{return el!=null});
            isValid&=data.length==Math.pow(2,i);
        } else{
            let index=level.indexOf(null);
            data=level.slice(index);
            isValid&=(index==-1)||data.every((el)=>{return el==null});
        }
    });
    
    return isValid;
    
};
let setData=(node,level)=>{
    return {node,level};
}
let getTreeData=(root)=>{
    let result=[];
    let queues=[setData(root,0)];
    
    while (queues.length!=0){
        let cursor=queues.shift();
        let {node,level}=cursor;
        let [left,right,val]=[null,null,null];
        
        result[level]=result[level]==null?[]:result[level];
        
        if (node!=null){
            ({left,right,val}=node);
        }
        result[level].push(val);
        [left,right].forEach((branch)=>{
            
            val!=null&&queues.push(setData(branch,level+1));
        });        
        
    }
    
    result.pop();
    return result;
}
