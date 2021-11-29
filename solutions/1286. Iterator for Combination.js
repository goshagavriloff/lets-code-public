/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    let n=characters.length;
    let k=combinationLength;
    this.result=[...generateCombo(k,n)];
    this.result=this.result.map((el)=>{
        let str='';
        el.forEach((i)=>{
            str+=characters[i];
        });
        return str;
    });
    this.result.sort();
    
};
​
/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    let cursor=this.result.shift();
    return cursor;
};
​
/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.result.length!=0;
};
​
function* generateCombo(k,n) {
    let arr=[...Array(k).keys(),n,0];
    let isValid=false;
    while (!isValid){
        yield arr.slice(0,k); 
        let j=0;
        let isExit=false;
        while (!isExit&&(j<arr.length-1)){
            if (arr[j]+1 == arr[j+1]){
                arr[j]=j;
                j++;
            } else {
                isExit=true;
            }
        }
        
        if (j < k){
            arr[j] += 1;
        } else {
            
            isValid=true;
        }
    }
    
    
}
​
/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
