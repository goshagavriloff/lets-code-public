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
var isEvenOddTree = function(root) {
    
    let level=0;
    let queue=[{root,level}];
    let arr=[];
    
    while(queue[0]!=null){
        let remove=queue.shift();
        let node=remove.root;
        let i=remove.level;
        
        arr[i]=arr[i]==null?[]:arr[i];
        arr[i].push(node.val);
        
        [node.left,node.right]
            .filter((el)=>{return el!=null})
            .forEach((el)=>{
                queue.push({
                    root:el,
                    level:i+1
                });
            });
        
    }
    let even=arr.filter((el,i)=>{return i%2==0&&i!=0});
    let odd=arr.filter((el,i)=>{return i%2!=0});
    
    let [isValidEven,isValidOdd]=[[even,0],[odd,1]].map((mass)=>{
