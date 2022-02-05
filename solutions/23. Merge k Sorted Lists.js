/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr=[];
    let result=null;
    lists.forEach((list)=>{
        while (list!=null){
            arr.push(list.val);
            list=list.next;
        }
    });
    arr=arr.sort((a,b)=>{return a-b});
    
    while (arr.length!=0){
        let cursor=arr.pop();
        let node=new ListNode(cursor,result);
        result=node;
    }
    return result;
};
