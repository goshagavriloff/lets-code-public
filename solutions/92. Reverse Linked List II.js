/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    
    let result;
    let [begin,middle,end]=[null,null,null];
    let step=1;
    
    while (head!=null){
        if (step<left){
            begin=insertValIntoList(begin,head.val);
        }
        
        if ((step>=left)&&(step<=right)){
            let temp=new ListNode(head.val,middle);
            middle=temp; 
        }
        
        if (step>right){
            end=insertValIntoList(end,head.val);
        }
        step++;
        head=head.next;
        
    }
    [begin,middle,end]
        .filter((el)=>{return el!=null})
        .forEach((el)=>{
            result=insertListIntoList(result,el);
            
        });
    return result;
};
let insertListIntoList=(head,list)=>{
    if (head==null){
