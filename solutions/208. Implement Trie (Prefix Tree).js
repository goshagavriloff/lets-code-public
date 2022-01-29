​
var Trie = function() {
    this.obj=setTrie();   
    this.set=new Set();
};
​
/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cursor=this.obj;
    
    for (let letter of word){
        let {children}=cursor;
        if (!children.has(letter)){
            children.set(letter,setTrie());
        }
        cursor=children.get(letter);
    }
    cursor.isEnd=true;
    this.set.add(word);
};
​
/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.set.has(word);
};
​
/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let queue=[setQueue(this.obj,0)];
    let word=prefix;
    let size=word.length;
    while (queue.length!=0){
        let cursor=queue.pop();
        let {node,i}=cursor;
