/***
 * Normal string writing
 */
const firstName = "Mejanur";
const SecondName = "Rahman";
const fullName = firstName +" "/* space deyar jonno */ + SecondName+" is a good boy";
console.log(fullName);

const multiline = "i love you\n" 
+ "i miss you\n";
console.log(multiline);
/**
 * writing string is very easy with es-6
 */

const fullName2 = `${firstName} ${SecondName}`;
console.log(fullName2);

//u can also addition subtraction inter the bracket
 
const fullName3 = `${firstName} ${50+50} % ${SecondName} is a good boy`;
console.log(fullName3);

const multiline2 = `i love you 
i miss you
i hate you`
console.log(multiline2);