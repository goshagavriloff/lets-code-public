/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let x=[ax1,bx1,ax2,bx2];
    let y=[ay1,by1,ay2,by2];
    
    let prodX=getAbs(ax1,ax2)*getAbs(ay1,ay2);
    let prodY=getAbs(bx1,bx2)*getAbs(by1,by2);
    let [a,b]=[0,0];
    let div=0;
    let isValidX=checkOrd(ax1,ax2,bx1,bx2);
    let isValidY=checkOrd(ay1,ay2,by1,by2);
    
    if (isValidX&&isValidY){
        [x,y]=[x,y].map(el=>el.sort((a,b)=>a-b));
        [a,b]=[x,y].map(([,c,d,])=>getAbs(c,d));
            
    }
    div=a*b; 
    return prodX+prodY-div;
    
};
let checkOrd=(ax1,ax2,bx1,bx2)=>{
    return !(ax1 > bx2 || ax2 < bx1);
}
let getAbs=(a,b)=>{return Math.abs(a-b)}
