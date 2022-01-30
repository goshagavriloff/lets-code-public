/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
​
    let idx=getIdx();
    while (idx>40){
        idx=getIdx();
    }
    return 1+(idx-1)%10;
};
let getIdx=()=>{
    let a=rand7();
    let b=rand7();
    return a+(b-1)*7;
}
