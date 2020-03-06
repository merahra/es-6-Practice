/****
 * default kono value deyar 3 ta upai
 */

 // number 1
 function add(num1, num2){
     if(num2 == undefined){
         num2 = 0;
     }
    return num1+num2;
 }
 total = add(1);
 console.log(total);

 //number 2

 function add2(num3, num4){
   num4 = num4 || 5;
    return num3+num4;
 }
 total2 = add2(12);
 console.log(total2);
 
//  number 3 use in es-6
function add21(num31, num41 =0){
    return num31 + num41;
}
  total21 = add21(23);
  console.log(total21);