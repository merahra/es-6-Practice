/**
 * age array add kora hoto concat diye
 */
const age1 = [12,11,13,14,16];
const age2 = [9,3,4,23,1,2,2];
const allAges = age1.concat(age2);
console.log(allAges);

/**
 * ES-6 e concat kore aktu vinno upaye
 */
const allAges2 = [...age1, ...age2,5,6];
console.log(allAges2);

//// age array theke Math.max kore maximum value pawa jai ni but,
b = [650,45,3456,34566]
max = Math.max(...b);//if you code Math.max(b); it grap error
console.log(max);