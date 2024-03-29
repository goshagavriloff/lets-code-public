​
var MapSum = function() {
    this.tree=new Map();
};
​
/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    
    this.tree.set(key,val);
    
};
​
/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let obj=this.tree;
    let result=0;
    
    [...obj.keys()].forEach((key)=>{
        if (key.indexOf(prefix)==0){
            result+=obj.get(key);
        }
    });
    return result;
    
};
​
/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
