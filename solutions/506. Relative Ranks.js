/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let places=["Gold Medal","Silver Medal","Bronze Medal"];
    
    let result=score.slice().sort((a,b)=>{return b-a});
    
    return score.map((el)=>{
        
        let i=result.indexOf(el);
        return (places[i]==null?(i+1):places[i]).toString();
        
    });
};
