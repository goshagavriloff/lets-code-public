/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
   let result=getDate(date1)-getDate(date2);
   return calcDate(result);
 
};
​
let getDate=(str)=>{
  let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
  let groups = str.match(reg).groups;
  let {year,month,day}=groups;
  return new Date(year,month-1,day);
}
let calcDate=(date)=>{
  return Math.abs(date/(1000*3600*24));
}
