/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let str=date.match(/(?<day>\b\d+)(\w+\b) (?<month>\b\S+\b) (?<year>\b\S+\b)/).groups;
 
let year=str.year;
let mm=(month[str.month].length!=2)?'0'+month[str.month]:month[str.month];
let day=(str.day.length!=2)?'0'+str.day:str.day;
    
    
    return year+"-"+mm+"-"+day;
};
​
let month={
    "Jan":'1', 
    "Feb":'2', 
    "Mar":'3', 
    "Apr":'4', 
    "May":'5', 
    "Jun":'6', 
    "Jul":'7', 
    "Aug":'8', 
    "Sep":'9', 
    "Oct":'10', 
    "Nov":'11', 
    "Dec":'12'};
