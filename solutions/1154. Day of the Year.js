/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let [year,month,day]=[
        date.match(/\d+/g)[0],
        date.match(/\d+/g)[1].replace(/^0/g,''),
        date.match(/\d+/g)[2],
    ];
    let jsDate=new Date(year, month-1, day);
    let beginDate=new Date(year, 0, 1);
    
    return ((jsDate-beginDate)/(24*3600*1000))+1;
};
