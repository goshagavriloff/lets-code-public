/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let point={'x':0,'y':0};
    let start={'x':0,'y':0};
    
    moves.split('').forEach((el)=>{
        point.x+=inst[el].x;
        point.y+=inst[el].y;
    });
    
    return isValid(point,start);
};
​
const inst={
    'U':{'x':0,'y':1},
    'D':{'x':0,'y':-1},
    'L':{'x':-1,'y':0},
    'R':{'x':1,'y':0}
};
let isValid=(a,b)=>{
    return (a.x==b.x)&&(a.y==b.y);
}
