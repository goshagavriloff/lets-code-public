/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let reg=/(?<word>\w+)(?<i>\d)/g;
    let result=[];
    let check;
    
    while (check = reg.exec(s)) {
        let i=check.groups.i;
        let word=check.groups.word;
        
        result.push({i,word});
        
    }
    let str=result
            .sort((a,b)=>{return a.i-b.i})
            .map((el)=>{return el.word})
            .join(' ');
    
    return str;
};
