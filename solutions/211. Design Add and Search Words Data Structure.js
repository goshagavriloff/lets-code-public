​
/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let queue=[setQueue(this.obj,0)];
    let size=word.length;
    while (queue.length!=0){
        let cursor=queue.pop();
        let {node,i}=cursor;
        let {children}=node;
        let check=word[i];
        
        
        if ((i==size)&&node.isEnd){
            return true;
        }
        if (check!=undefined){
            [...children.keys()].forEach((key)=>{
                
                ((check=='.')||(key==check))&&queue.push(setQueue(children.get(key),i+1));
            }) 
        }
        
        
    }
    return false;
    
};
let setTrie=()=>{
    let children=new Map();
    let isEnd=false;
    return {children,isEnd};
}
let setQueue=(node,i)=>{
    return {node,i}
}
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
