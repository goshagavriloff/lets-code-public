/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.result=[];
    while (head!=null){
        this.result.push(head.val);
        head=head.next;
    }
    this.max=this.result.length-1;
    this.min=0;
};
​
/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let rnd=getRndInteger(this.min,this.max);
    return this.result[rnd];
    
};
​
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
