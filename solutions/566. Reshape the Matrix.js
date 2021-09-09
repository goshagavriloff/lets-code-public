/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let str=nums.toString()+',';
    let reg=new RegExp('([-\\d]+,)'+'{'+c+'}','g');
    let arr=str.match(reg);
    
    let isValid=r==arr.length;
    // console.log(isValid,arr);
    return isValid?calcMatrix(arr):nums;
};
let calcMatrix=(arr)=>{
    
    return arr.map((el)=>{
        let result=el.split(',');
        result.pop();
        return result;
    });;
}
