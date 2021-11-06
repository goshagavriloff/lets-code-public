/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    items=items.map(([type,color,name])=>{
        return {type,color,name};
    }).filter((el)=>{
        return el[ruleKey]==ruleValue;
    });
    return items.length;
};
