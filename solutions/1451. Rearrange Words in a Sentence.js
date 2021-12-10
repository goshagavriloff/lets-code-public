/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    let arr=text.match(/\w+/g);
    arr.sort((a,b)=>{return a.length-b.length});
    
    text=arr.join(' ');
    
    return capitalizeFirstLetter(text);
};
​
let capitalizeFirstLetter=(str)=> {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
