/**
 * function declaration normally two ways
 */
function doubleIt(num){
    return num * 2
}
const result = doubleIt(6);
console.log(result);

//

const doubleIt2 = function(num2){
    return num2 * 2;
}
const result2 = doubleIt2(62);
console.log(result2);

/**
 * function writing in es 6 
 */

const doubleIt3 = num3 => num3*2;  // ekane => etar karone er nam arrow function
const result3 = doubleIt3(63);
console.log(result3);

// multiline function

const big = (x,y) => {
   const sum = x+y;
   const diff = x-y;
   const result4 = sum*diff;
   return result4;

}
const make = big(2,3);
console.log(make);