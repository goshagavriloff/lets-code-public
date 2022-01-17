/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let result=0;
    let prev=-1;
    
    for (let i=0;i<seats.length;i++){
        let cursor=seats[i];
        if(cursor==0){
            let next=seats.indexOf(1,i);
            next=(next==-1)?seats.length+i:next;
            prev=(prev==-1)?-next:prev;
            let max=Math.min(i-prev,next-i);
            result=Math.max(result,max);
        } else{
            prev=i;
        }
    }
    return result;
};
