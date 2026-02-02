 //loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

//for loop
//why use for-loop? when you know how many times you want to repeat a block of code.
// print 1 to 10 --> console.log(1); ... console.log(10);
//kya thi javanu chhe; kya sudhi javnu chhe; kevi rite javanu chhe
//for (ex. 1 -> 50 -> increment by 1)
//(start; end; change)

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// for (let j = 9; j >= 1; j--) {
//     console.log(j);
// }

// for (let k = 1; k <= 5; k++) {
//     console.log("Hello World");
// }

//while loop -- do while loop
//kya thi javanu chhe --> kya rokavanu chhe --> kevi rite javanu chhe
//while (ex. 1 -> Hello World -> stop when condition false)
//start
//while(end){
// code
// change
// }

// let p = 5;
// while (p <= 10) {
//     console.log("P with while loop :" , p);
//     p++;
// }
// let b = 30;
// while (b >= 20){
//     console.log(b);
//     b--;
// }

// let c = 30;
// while (c >= 20){
//     console.log(c);
//     c--;
// }

// let d=25;
// while(d>20){
//     console.log(d);
//     d++;
// }


// let d = 0;
// while (d < 5) {
//     console.log("Hello");
//     d++;
// }
// let f = 50;
// while (f <= 60) {
// console.log(f);
// f--;
// }

// let q =50;
// while (q <= 60) {
// console.log(q);
// --q;
// }
// let d=0;
// while(d<20){
//     console.log("hello")
//     d++;
// }

// let f=50;
// while(f<=60){
//     console.log(f);
//     f++;
// }
// let q=60;
// while(q>=50){
//     console.log(q);
//     q--;
// }
// do while loop
// do { } while (end);
// start
// do{
//   code
//   change
// }
// while(end);

// let j = 12; // start
// do {
//     console.log("do while loop:", j); // code
//     j++; // change (condition)
// } while (j < 20); // while check after executing code block (end)

// let p=40;
// do{
//     console.log("do while loop 2");
//     p--;
// }while(p>=20)

// break
// for (let k = 1; k <= 201; k++) {
//     console.log("Loop with break", k);
//     if (k === 30) {
//         break;
//     }
// }
// continue
// for (let a = 1; a <= 10; a++) {
//   if (a === 5) {
//     continue;
//   }
//   console.log(a);
// }
//exercise:
//ex 1
// console.log("Print number from 1 to 10 using a for loop.");
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
//ex 2
// console.log("Print number from 10 to 1 using while loop.");
// let d=10;
// while(d>=1){
//     console.log(d);
//     d--;
// }
//ex3
console.log("Print even numbers from 1 to 20 using for loop.");
for(let x=2; x<=20; x+=2){
    console.log(x);
}