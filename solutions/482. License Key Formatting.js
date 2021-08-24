/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let filter=new RegExp('\\w{1,'+K+'}','g');
    let result=S
                .replace(/-/g,'')
                .toUpperCase()
                .split('').reverse('').join('')
                .match(filter);
                
   // console.log(result);
    return result==null?"":result
                            .reverse('')
                            .map((el)=>{return el.split('').reverse('').join('')})
                            .join('-');
};
