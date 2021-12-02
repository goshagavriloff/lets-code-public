/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    return [...generateCombo(k,n)];
};
​
function* generateCombo(k,n) {
    let arr=[...Array.from({length: k}, (_, i) => i + 1),n+1,0];
    let isValid=false;
    while (!isValid){
        yield arr.slice(0,k); 
        let j=0;
        let isExit=false;
        while (!isExit&&(j<arr.length-1)){
            if (arr[j]+1 == arr[j+1]){
                arr[j]=j+1;
                j++;
            } else {
                isExit=true;
            }
        }
        
        if (j < k){
            arr[j] += 1;
        } else {
            
            isValid=true;
        }
    }
    
    
}
