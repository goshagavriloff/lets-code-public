/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rules=getRules();
    return words.filter((el)=>{
        return rules.some((item)=>{
            return el.match(item)!=null;
        });
    });
};
​
let getRules=()=>{
        let rows=[
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m'],
    ];
    let rules=rows.reduce((acc,val)=>{
        
        let str='\^\[';
        val.forEach((el)=>{
            str+=el;
        });
        str+='\]{1,}\$';
        let reg=new RegExp(str,'gi');
       
        return acc.concat(reg);
    },[]);
    return rules;
}
