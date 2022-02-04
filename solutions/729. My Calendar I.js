​
var MyCalendar = function() {
   this.result=[]; 
};
​
/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (let [a,b] of this.result) {
        if ((a<end)&&(start<b)){
            return false;
        } 
    }
    this.result.push([start, end]);
    return true;
};
​
/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
