/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder=folder.sort().reverse();
    let result=[];
    while (folder.length!=0){
        let cursor=folder.pop();
        
        let isHasSub=result.some((el)=>{return cursor.startsWith(`${el}/`)});
        if (!isHasSub){
            result.push(cursor);
        }
        
        
    }
    return result;
    
};
​
