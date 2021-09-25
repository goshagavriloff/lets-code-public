/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map((arr)=>{
        return arr.reverse().map((el)=>{
            return el==0?1:0;
        });
    });
};
