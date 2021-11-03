/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.map((el) =>{
        return el. reduce((acc, val) =>{return acc+val}, 0) 
    } ).sort((a,b)=>{return b-a}) [0] ;
};
