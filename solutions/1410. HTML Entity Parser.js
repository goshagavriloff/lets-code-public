/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    let reg=/\&\w+?;/g;
    return text.replace(reg,(match)=>{
        return entities[match]===undefined?match:entities[match];
    });
​
};
​
const entities={
    '&quot;':'\"',
    '&apos;':"'",
    '&amp;':'&',
    '&gt;':'>',
    '&lt;':'<',
    '&frasl;':'/',
};
