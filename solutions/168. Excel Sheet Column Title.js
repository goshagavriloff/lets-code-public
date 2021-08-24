/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let result=recTitle(n);
    return result;
};
let recTitle=(n)=>{
    if (n<27){
        return letters[n];    
    } else {
        let [mod,div]=[n%26, parseInt (n/26)];
        if (mod==0){
           return recTitle(div-1)+recTitle(26);
        }
        return recTitle(div)+recTitle(mod);
        
    }
}
​
const letters=["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
