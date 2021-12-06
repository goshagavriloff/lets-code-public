​
var ProductOfNumbers = function() {
    this.arr=[];
};
​
/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.arr.push(num);
};
​
/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let product=1;
    let copy= this.arr.slice(-k);
    for (let i=0;i<k;i++){
        product*=copy[i];
    }
    return product;
};
​
/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
