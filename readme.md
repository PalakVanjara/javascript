<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error:  Cannot access 'nm' before initialization</p>
<p>Why : we print before declare and initiallise</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undefined </p>
<p>Why : we print before declaration and initiallise </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: 2</p>
<p>Why : it print block scpoe value </p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: inside:20,outside:10</p>
<p>Why : it print global scope</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: user,error for person</p>
<p>Why : property of variable can change in const, but const variable can't reassign </p>
</div>
 <!-- day2 -->
 <h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error:1</p>
<p>Why :true means 1 +false means 0 ,so 1+0=1 </p>
</div>
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error:1</p>
<p>Why : it consider null 0 means empty</p>
</div>

<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error:'1212'</p>
<p>Why :it combines number type with string </p>
</div>

<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error:False</p>
<p>Why : when value not define then it calls undefined. then !undefine=true, so !true=false, so !! undefined=false</p>
</div>

<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error:11</p>
<p>Why :it perform subtraction whether its string</p>
</div>

<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error:hello5</p>
<p>Why :NaN is a failed number oprations that why that type is number </p>
</div> 

<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error:1.undefined, 2.null</p>
<p>Why : < 1. it don't store value so it return undefined,2. it consist null value so it returns null/p>
</div>

<!-- day 3 -->

div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>Answer or Error: "both are greater than"</p>
<p>Why : condition is true</p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Answer or Error:acess granted </p>
<p>Why :OR needs only 1 True value </p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Answer or Error:pleasent day </p>
<p>Why : condition is false</p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Answer or Error:falsy value </p>
<p>Why : the value of zero is False</p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Answer or Error: grade:c</p>
<p>Why : condition 3 is true</p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Answer or Error: STATUS:GOLD </p>
<p>Why : 1st condition is true</p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn1 = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn1 && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Answer or Error:access deny:"deny" </p>
<p>Why : because both condition must true but here only 1 con is true.</p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Answer or Error: 6</p>
<p>Why : beacuse it is post increment </p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Answer or Error:  9</p>
<p>Why : it is pre increment</p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Answer or Error:(5,4) </p>
<p>Why : its post increment that's why b is 5 and c is 4</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Answer or Error: (5,5)</p>
<p>Why : it's pre increment and b value is 5 and c is also 5</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Answer or Error:it print 10,9 </p>
<p>Why :beacuse  is is post decrement, so it 1st show original value then it decrese and then print 9.</p>
</div>

<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Answer or Error: 12</p>
<p>Why :it addition the post increment and pre increment </p>
</div>

<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Answer or Error: error,100</p>
<p>Why : </p>
</div>

<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Answer or Error: Matched</p>
<p>Why :it is post decrement that's why the value of count stay 5 so 5===5. ans is matched </p>
<p></p>
</div>

<!-- day 4 -->
<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>Answer or Error: "two" "three" </p>
<p>Why : it just priont the console.log message</p>
<div>


<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>Answer or Error: grade  B </p>
<p>Why : it print according to condition .</p>
<div>


<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>Answer or Error:  </p>
<p>Why : i.</p>
<div>

<!-- day5 -->
<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
<p> console.log("Print number from 1 to 10 using a for loop.");
for (let i = 1; i <= 10; i++) {
   console.log(i);
 }
</p>
</div>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
<p>console.log("Print number from 10 to 1 using while loop.");
let d=10;
 while(d>=1){
    console.log(d);
    d--;
}
</p>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}</p>
</div>

<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i= 1;</p>
<p>while(i<=15){
    if(i%2 !==0){ // or (i%2 ===1)
    console.log(i);
    }
    i++;
}</p>
</div>

<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>
</div>

<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
</p>
</div>

<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>
let num = prompt("give a number");
for(let i=1; i <=numl i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
</p>
</div>

<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
</div>
<!-- day 6 -->
## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p>Function declarations are fully hoisted, meaning both the function name and its body are moved to the top of the scope, so the function can be called before it is defined in the code.They are hoisted

Function expressions are not hoisted as functions. Only the variable declaration is hoisted, not the function assignment, so the function cannot be used before it is defined<. They are not Hoisted/p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and why:ans-hello, why:it using hosting in function</p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>const add = (a, b) => {
    return a + b;
}; </p>
<p>Ans And How: It simply add two values</p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why: name is a parameter.A parameter is a variable listed in the function definition.
"user" is an argument.An argument is the actual value passed to the function when it is called
</p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why:there are 3 parameters and 2arguments.it just print 2 parameters and #rd as undefined</p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why: Ans-Hello Guest.NO error Why- name = "Guest" is a default parameter.Default parameters are used when no argument is passed (or when the argument is undefined)</p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why: Ans-[1, 2, 3, 4, 5],NO Error,Why-The ... is called the rest operator when used in function parameters.It collects all remaining arguments into a single array.When you don’t know in advance how many arguments will be passed.Makes the function flexible
</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why:ForLoop-Error,ans-NaN, ForEach-No error,ans-150,Why-Rest parameter ...scores collects arguments into an array.Array indexing must use < length, not <= length.forEach or reduce is safer for summing arrays.</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
        return; // exits the function
    }
    console.log("Access Granted");
}
</p>
<p>Ans And how:Why-When a condition is met, immediately exit the function with return.The rest of the function won’t execute.Eliminates the need for else</p>
</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why:Ans-undefined, Why-The function has a return statement without any value.In JavaScript, if a function doesn’t explicitly return a value, it automatically returns undefined.</p>
</div>

<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>
<p>Ans and Why </p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can You assign a function to a variable and then all it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass A function into anthor funtion and excute it inside.</p>
<p>Ans and Why, How</p>
<p>function abcd(val){val()}</p>
<p>abcd(function(){ console.log("Hello")})</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is higer order function?</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>
<p>let a = 5;</p>
<p>function num(num){
total += num;
}
<p>num(3);</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 17: </h1>
<p>convert example 16 function into pure function?</p>
<p>Ans and how</p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans and Example</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<p>function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}</p>
<p>const counter = outer();</p>
<p>counter();</p>
<p>counter();</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<p>function init(){
    console.log("Initialized");
}</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<p>let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>
 