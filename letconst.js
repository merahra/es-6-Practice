const hubby = "Elias Kanchon";
console.log(hubby);

// /* const amra jodi bosai tahole seti sthai hoye jai erpor amra jodi kono change korte chai setar 
// kono change hoi na.*/
// /*******************
//  * amra jodi akta array nei tahaole array er sudhu value change kora jabe kintu pura array neya jabe na
//  */

  const number = [ 12, 88 ];
  console.log(number);
 console.log(number [1]);
 number [1] = 13;
 console.log(number);
//number = ["sumon", "razia","don"];
//console.log(number);
const nayok = {name: "sakib khan",phone:4567}

/********
 * new identifier like "var"
 * let also called it scope variable
 */

let patient = "raahim chacha";
patient = "fatema khala"   /*let change kora jai but const change kora jai na */
console.log(patient);

sum =0;
for(var i=0; i<=10; i++){  ///var i diye declare kora hoise
    sum = sum + i;
}
console.log(i);   /// i dekaha jassse

let sum =0;
for(let i=0; i<=10; i++){  ///let i diye declare kora hoise
    sum = sum + i;
}
console.log(i); // ebare i ar show kortesena

