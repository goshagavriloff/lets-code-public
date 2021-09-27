/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    emails=emails.map((el)=>{
        let username=el.match(/[\s\S]+?(?=\+[\s\S]+@)/);
        let domain=el.match(/@[\s\S]+/);
        
        username=username==null?el.match(/[\s\S]+(?=@)/):username;
        
        username=username[0].replace(/\./g,'');
        
        return username+domain[0];
    });
    
    return new Set(emails).size;
    
};
