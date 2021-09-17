/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let str=num.toString();
    let size=str.length;
    
    if (size==0){
            tree=temp;
            return '';
    }
    
    let digit=str[size-1];
    let el=tree['el'];
    let [prev,next]=['',''];
    
    if ((digit>4)&&(digit<9)){
        prev=tree.middle;
        digit-=5;
    }
    
    if (digit==4){
        next=tree.middle;
        digit=1;
    }
    
    if (digit==9){
        next=tree.next.el;
        digit=1;
    }
    str=str.slice(0,-1);
    tree=tree.next;
    return intToRoman(str)+prev+el.repeat(digit)+next;
    
};
​
var tree={
               el:'I',
               middle:'V',
               next:{
                   el:'X',
                   middle:'L',
                   next:{
                        el:'C',
                        middle:'D',
                        next:{
                            el:'M'
                        }
                   }
               }
          };
var temp=tree;
