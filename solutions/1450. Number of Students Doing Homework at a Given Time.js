/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let result=0;
    let length=startTime.length;
    
    for (let i=0;i<length;i++){
        let [a,b]=[startTime[i],endTime[i]];
        (a<=queryTime)&&(b>=queryTime)&&result++;
    }
    return result;
};
