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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let queue=[setDataLevel(root,'')];
    let result=new Set();
    while (queue.length>0){
        
        let cursor=queue.shift();
        let {node,level}=cursor;
        let {val,left,right}=node;
        let isValid=left==null&&right==null;
        let newVal=[transformLevel(val),...level].join('');
        
        isValid&&result.add(newVal);
        
        [left,right].forEach((branch)=>{
            branch!=null&&queue.push(setDataLevel(branch,newVal));
        });
    }
    let i=0;
    result=Array.from(result);
    while (result.length>1){
        let min=result.sort((a,b)=>{return getDiv(a[i],b[i])})[0][i];
        result=result.filter((el)=>{return el[i]==min});
        i++;
    }
    return result[0];
};
let setDataLevel=(node,level)=>{
    return {node,level};
}
let transformLevel=(i)=>{
    return String.fromCharCode(97+i*1);
}
let getDiv=(a,b)=>{
    [a,b]=[a,b].map((el)=>{
        return el===undefined?el:el.charCodeAt(0);
    });
    return a-b;
}
