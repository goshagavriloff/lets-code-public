/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let result=[];
    let last=graph.length-1;
    let queue=[setQueue(graph[0],[0])];
    while (queue.length!=0){
        let {cursor,path}=queue.pop();
        let isLast=(path.slice(-1)==last);
        
        
        isLast&&result.push(path);
        
        cursor.forEach((branch)=>{
            let next=(branch==last)?last:branch;
            queue.push(setQueue(graph[next],path.concat(next)));
            
            
        });
    }
    return result;
};
let setQueue=(cursor,path)=>{
    return {cursor,path};
}
