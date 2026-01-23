 //loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

//for loop
//why use for-loop? when you know how many times you want to repeat a block of code.
// print 1 to 10 --> console.log(1); ... console.log(10);
//kya thi javanu chhe; kya sudhi javnu chhe; kevi rite javanu chhe
//for (ex. 1 -> 50 -> increment by 1)
//(start; end; change)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let j = 9; j >= 1; j--) {
    console.log(j);
}

for (let k = 1; k <= 5; k++) {
    console.log("Hello World");
}

//while loop -- do while loop
//kya thi javanu chhe --> kya rokavanu chhe --> kevi rite javanu chhe
//while (ex. 1 -> Hello World -> stop when condition false)
//start
//while(end){
// code
// change
// }

let p = 5;
while (p <= 10) {
    console.log("L with while loop :" , p);
    p++;
}