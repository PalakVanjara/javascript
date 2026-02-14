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
    if(i%2 !==0){  or (i%2 ===1)
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
     let sum =0;
    sum = sum + i;
     console.log(sum);
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
        return;  exits the function
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
    let score = 0;  this is private variable
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

 <!-- day7 -->
 Q1. push()
You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push("Buy milk");
ans:['Wake up', 'Brush teeth', 'Buy milk']
why:push() add value to end of array


Q2. pop()
Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
ans: ['Email', 'Message']
why:it remove last value from array


Q3. shift()
A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
ans:['Customer2', 'Customer3']
why:it remove 1st value

 Q4. unshift()
A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift("song D");
ans:['song D', 'Song B', 'Song C']
why:it add value to the end of array


 Q5. splice()
In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1,1,"John","sara");
ans: ['Mike', 'John', 'sara', 'Emma', 'Sophia']
why:it remove john and add 2 value place on it


 Q6. splice()
From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1,2);
ans:['Burger', 'Salad']
why:it remove 1 and 2 no index value.


 Q7. slice()
Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekends=days.slice(5,8);
ans: ['Saturday', 'Sunday']
why:it add weekends in new variable 

 Q8. reverse()
Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
ans:['Hard', 'Medium', 'Easy']
why:it reverse the order

 Q9. sort()
Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort();
ans:[12, 34, 45, 78, 89]
why:it sort in the acsending order


 Q10. sort() with numbers
 Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
ans:[49, 149, 199, 299, 999]
why:it just sort in ascending order with function.

 Q11. slice() vs splice()
 From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);
ans:['Laptop', 'Phone', 'Tablet']
why:it stores 3 value in different array


 Q12. splice() complex
 In the array below:
 1. Remove 'Blue'
 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange')
ans:['Red', 'Green', 'Purple', 'Orange', 'Yellow']
why:it use the splice()

 Q13. reverse() + push()
 Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse().push("final Step");
ans:['Step 3', 'Step 2', 'Step 1', 'final Step']
why:use reverse and push with together

 Q14. sort() strings
 Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
ans:['alice', 'Bob', 'charlie', 'David']
why:toLowerCase() removes case differences.localeCompare() handles alphabetical order properly.Original casing is preserved


 Q15. Combination Question
 You are managing a movie watchlist:
 1. Add 'Inception'
 2. Remove the first movie
 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
ans:['Gladiator', 'Inception', 'Titanic']
why:it perform 3 function combine

 Q16. splice() return value
 What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
ans:[1, 4]
why:it remove value on 1st index and  total 2 value remove  


 Q17. slice() immutability check
 After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
ans:[20, 30]
why:It is immutable.slice(start, end) returns a new array.it not change original array

 Q19. reverse() mutation
 After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
ans:['c', 'b', 'a']
why:it change original array.It does not create a new array.reversedLetters === letters

 Q21. splice() edge case
 What happens if deleteCount is 0?
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
ans:['x', 'new', 'y', 'z']
why:'new' gets inserted between 'x' and 'y'.1 → start index.0 → delete nothing.'new' → element to insert

 Q23. slice() negative index
 What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
ans:[300, 400]
why:slice(start, end) → end is exclusive.Negative values count from the right.Original array stays unchanged


 Q24. splice() vs slice() decision
 Which method would you use if you want to:
 a) Update the original array
 b) Keep the original array unchanged
 let values1 = [100, 200, 300, 400, 500];
 values1.splice(1, 1, 'newValue');

let values2 = [100, 200, 300, 400, 500];
let copy=values2.slice(0,2);
ans:[100, 'newValue', 300, 400, 500],[100, 200]
why:a-it use the splice method and b-use the slice method


 Q25. Chained methods (brain teaser)
 What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
ans:[2, 3, 1]
why:shift-it remove'1' starting value .
push- it add the '1' value to the end.

<!-- day 8 -->
1. Double daily steps count
Real life: Fitness app doubling step goal

const step = [1000, 2000, 3000];
function doubleSteps(step) {
  return step * 2;
}

const newSteps = step.map(doubleSteps);
ans:[1000, 2000, 3000]

2. Convert minutes to seconds
Real life: Video duration calculation

const minutes = [1, 5, 10];
const seconds = minutes.map(function(min) {
  return min * 60;
});
ans:[60, 300, 600]


3. Add ₹50 delivery charge to prices
Real life: Food delivery app

cost prices = [200, 350, 500];
const finalPrices = prices.map(price => price + 50);
ans:[250, 400, 550]


4. Convert exam marks to grades
Real life: Result system

const marks = [35, 72, 88, 40];
function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = marks.map(getGrade);
ans:['Fail', 'Pass', 'Pass', 'Pass']


5. Capitalize names
Real life: Display usernames properly

const names = ['rahul', 'neha', 'amit'];
const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);
ans:['Rahul', 'Neha', 'Amit']


6. Apply 10% discount
Real life: Shopping sale

const prices = [500, 1000, 1500];
function applyDiscount(price) {
  return price - price * 0.10;
}
const discounted = prices.map(applyDiscount);
ans:[450, 900, 1350]


7. Add bonus points to scores based on condition
Real life: Game scoring system

const scores = [45, 60, 85];
const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
ans:[45, 70, 105]


8. Convert temperatures with formula
Real life: Weather app

const celsius = [0, 20, 30];
function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}
const fahrenheit = celsius.map(toFahrenheit);
ans:[32, 68, 86]


9. Generate table of numbers
Real life: Math learning app

const numbers = [1, 2, 3, 4];
const tableOfTwo = numbers.map(num => num * 2);
ans:[2, 4, 6, 8]


10. Combine map with string formatting
Real life: SMS notification system

const balances = [500, 1200, 300];
const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
); 
ans: ['Your balance is ₹500', 'Your balance is ₹1200', 'Your balance is ₹300']

<!-- ---------------------------------------------------------------------------------- -->
### 1. Get even numbers
**Real life:** Find even roll numbers

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
ans:[2, 4, 6]

### 2. Filter adults
**Real life:** Allow only 3+ users

const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
ans:[19]

### 3. Remove empty items
**Real life:** Clean user input

const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
ans:['Hello', 'World', 'JS']

### 4. Filter passing marks
**Real life:** Exam result system

const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
ans:[72, 88, 40]

### 5. Get affordable prices
**Real life:** Shopping app price filter

const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
ans:[199, 499, 299]

### 6. Filter long words
**Real life:** Search keyword validation

const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
ans: ['hello', 'javascript']

### 7. Filter positive numbers
**Real life:** Bank transaction validation

const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
ans: [200, 500, 300]

### 8. Filter numbers within a range
**Real life:** Score selection

const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
ans:[60, 85, 90]

<!-- reduce  -->
### 1. Total money in wallet
**Real life:** Add all cash amounts

const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
ans:350

### 2. Total steps walked in a week
**Real life:** Fitness tracker

const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
ans:18000


### 3. Find total cart price
**Real life:** Shopping bill

const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
ans:997


### 4. Find maximum score
**Real life:** Highest exam mark

const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);
ans:92


### 5. Count total characters
**Real life:** Text length calculation

const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
ans:9


### 6. Combine words into a sentence
**Real life:** Message builder

const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
ans:'Learning JavaScript is fun'


### 7. Count passed students
**Real life:** Result summary

const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
ans:3


### 8. Calculate final balance
**Real life:** Bank account calculation

const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
ans:1000


### 9. Build comma-separated string
**Real life:** Display values in UI

const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
ans:'Pen, Book, Pencil'

<!-- map,filter,reduce -->
<div>
  <h1>Example 1: Shopping App – Discounted Total</h1>
  <p>const prices = [200, 800, 1200, 450, 700];</p>
  <p>const total = prices.filter(price => price > 500).map(price => price * 0.9).reduce((sum, price) => sum + price, 0);</p>
  <p>Answer or Error: 2430</p>
  <p>Why: Pehle 500 se upar prices filter hue, phir 10% discount laga aur end me total nikala.</p>
</div>

<div>
  <h1>Example 2: Fitness App – Total Active Minutes</h1>
  <p>const minutes = [20, 45, 60, 15, 90];</p>
  <p>const totalCalories = minutes.filter(min => min > 30).map(min => min * 5).reduce((total, cal) => total + cal, 0);</p>
  <p>Answer or Error: 975</p>
  <p>Why: 30 se zyada minutes wale days select hue, calories me convert hue aur total add hua.</p>
</div>

<div>
  <h1>Example 3: Exam System – Average of Passed Marks</h1>
  <p>const marks = [35, 72, 88, 40, 25, 90];</p>
  <p>const passed = marks.filter(mark => mark >= 40);</p>
  <p>const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;</p>
  <p>Answer or Error: 72.5</p>
  <p>Why: Sirf passing marks liye gaye aur unka average nikala.</p>
</div>

<div>
  <h1>Example 4: Salary System – Monthly Payout</h1>
  <p>const wages = [300, 800, 450, 1000, 600];</p>
  <p>const totalPayout = wages.filter(wage => wage > 500).map(wage => wage + 100).reduce((total, wage) => total + wage, 0);</p>
  <p>Answer or Error: 2700</p>
  <p>Why: 500 se zyada wages par bonus add karke total payout nikala.</p>
</div>

<div>
  <h1>Example 5: Online Course – Completion Points</h1>
  <p>const progress = [20, 50, 75, 40, 100];</p>
  <p>const totalPoints = progress.filter(p => p >= 50).map(p => p * 2).reduce((sum, p) => sum + p, 0);</p>
  <p>Answer or Error: 450</p>
  <p>Why: Completed lessons ko points me convert karke total nikala.</p>
</div>

<div>
  <h1>Example 6: Bank Transactions – Final Balance</h1>
  <p>const transactions = [1000, -500, 2000, -300, 1500];</p>
  <p>const creditedAmount = transactions.filter(amount => amount > 0).map(amount => amount * 1.02).reduce((total, amount) => total + amount, 0);</p>
  <p>Answer or Error: 4590</p>
  <p>Why: Sirf credit transactions par interest add karke total calculate hua.</p>
</div>

<div>
  <h1>Example 7: Game App – Final Score</h1>
  <p>const scores = [30, 60, 90, 45, 80];</p>
  <p>const finalScore = scores.filter(score => score > 50).map(score => score + 10).reduce((sum, score) => sum + score, 0);</p>
  <p>Answer or Error: 270</p>
  <p>Why: 50 se upar scores par bonus add karke sum nikala.</p>
</div>

<div>
  <h1>Example 8: E-commerce – Total Taxed Amount</h1>
  <p>const prices = [500, 1200, 3000, 800, 1500];</p>
  <p>const finalAmount = prices.filter(price => price > 1000).map(price => price * 1.18).reduce((sum, price) => sum + price, 0);</p>
  <p>Answer or Error: 6724</p>
  <p>Why: 1000 se upar items par tax add karke final amount nikala.</p>
</div>

<div>
  <h1>Example 9: Attendance System – Reward Points</h1>
  <p>const hours = [6, 8, 9, 7, 10];</p>
  <p>const totalPoints = hours.filter(hour => hour >= 8).map(hour => hour * 10).reduce((sum, point) => sum + point, 0);</p>
  <p>Answer or Error: 270</p>
  <p>Why: 8 ya usse zyada hours par points calculate hue aur total hua.</p>
</div>

<div>
  <h1>Example 10: Interview Brain Teaser</h1>
  <p>const numbers = [1, 2, 3, 4, 5, 6];</p>
  <p>const sumOfSquares = numbers.filter(num => num % 2 === 0).map(num => num * num).reduce((sum, num) => sum + num, 0);</p>
  <p>Answer or Error: 56</p>
  <p>Why: Even numbers ke squares ka sum nikala gaya.</p>
</div>

<div>
  <h1>Example 1: Grocery Store – Total Cost</h1>
  <p>const prices = [50, 120, 300, 80, 200];</p>
  <p>const totalCost = prices.filter(p => p > 100).map(p => p * 1.05).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 651</p>
  <p>Why: 100 se zyada items par 5% tax lagakar total nikala.</p>
</div>

<div>
  <h1>Example 2: Fitness App – Weekly Calories</h1>
  <p>const minutes = [10, 25, 40, 15, 60];</p>
  <p>const totalCalories = minutes.filter(m => m >= 20).map(m => m * 4).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 500</p>
  <p>Why: 20+ minutes wale days ko calories me convert kiya.</p>
</div>

<div>
  <h1>Example 3: Exam Results – Total Passed Marks</h1>
  <p>const marks = [35, 55, 80, 20, 45];</p>
  <p>const totalMarks = marks.filter(m => m >= 40).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 180</p>
  <p>Why: Sirf passing marks ka sum liya gaya.</p>
</div>

<div>
  <h1>Example 4: Bank App – Total Credits</h1>
  <p>const transactions = [500, -200, 1000, -300, 700];</p>
  <p>const totalCredit = transactions.filter(t => t > 0).reduce((s, t) => s + t, 0);</p>
  <p>Answer or Error: 2200</p>
  <p>Why: Sirf positive transactions add hue.</p>
</div>

<div>
  <h1>Example 5: Online Sale – Discounted Bill</h1>
  <p>const prices = [800, 1500, 3000, 600, 1200];</p>
  <p>const totalBill = prices.filter(p => p > 1000).map(p => p * 0.85).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 4760</p>
  <p>Why: 1000 se upar items par 15% discount laga.</p>
</div>

<div>
  <h1>Example 6: Attendance – Reward Points</h1>
  <p>const hours = [5, 7, 8, 6, 9];</p>
  <p>const totalPoints = hours.filter(h => h >= 7).map(h => h * 10).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 240</p>
  <p>Why: 7+ hours ko points me convert kiya.</p>
</div>

<div>
  <h1>Example 7: Delivery App – Total Distance</h1>
  <p>const distances = [3, 6, 10, 4, 8];</p>
  <p>const totalDistance = distances.filter(d => d > 5).map(d => d + 1).reduce((s, d) => s + d, 0);</p>
  <p>Answer or Error: 27</p>
  <p>Why: 5 km se zyada trips me bonus add hua.</p>
</div>

<div>
  <h1>Example 8: Salary System – Final Salary</h1>
  <p>const salaries = [18000, 25000, 30000, 15000];</p>
  <p>const totalSalary = salaries.filter(s => s > 20000).map(s => s + 2000).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 59000</p>
  <p>Why: Eligible salaries me bonus add karke total.</p>
</div>

<div>
  <h1>Example 9: Study App – Total Study Time</h1>
  <p>const hours = [0.5, 1.5, 2, 0.75, 3];</p>
  <p>const totalMinutes = hours.filter(h => h > 1).map(h => h * 60).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 390</p>
  <p>Why: 1 ghante se zyada sessions ko minutes me badla.</p>
</div>

<div>
  <h1>Example 10: Electricity Usage – Monthly Bill</h1>
  <p>const units = [80, 120, 200, 90, 150];</p>
  <p>const totalBill = units.filter(u => u > 100).map(u => u * 6).reduce((s, b) => s + b, 0);</p>
  <p>Answer or Error: 2820</p>
  <p>Why: 100 se upar units ka bill calculate hua.</p>
</div>

<div>
  <h1>Example 11: Game Scores – Final Power Score</h1>
  <p>const scores = [30, 50, 90, 20, 70];</p>
  <p>const powerScore = scores.filter(s => s > 40).map(s => s * 2).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 420</p>
  <p>Why: High scores double karke sum hue.</p>
</div>

<div>
  <h1>Example 12: Travel App – Total Fare</h1>
  <p>const rides = [5, 12, 20, 8, 15];</p>
  <p>const totalFare = rides.filter(r => r > 10).map(r => r + 50).reduce((s, r) => s + r, 0);</p>
  <p>Answer or Error: 147</p>
  <p>Why: Long rides me service fee add hui.</p>
</div>

<div>
  <h1>Example 13: Office Work – Productive Hours</h1>
  <p>const hours = [4, 6, 8, 5, 9];</p>
  <p>const productiveMinutes = hours.filter(h => h >= 6).map(h => h * 60).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 1380</p>
  <p>Why: 6+ hours ko minutes me convert kiya.</p>
</div>

<div>
  <h1>Example 14: Shopping Cart – Reward Coins</h1>
  <p>const purchases = [300, 800, 1200, 400];</p>
  <p>const coins = purchases.filter(p => p > 500).map(p => 10).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 20</p>
  <p>Why: Har eligible purchase par 10 coins mile.</p>
</div>

<div>
  <h1>Example 15: Fuel App – Total Fuel Cost</h1>
  <p>const liters = [3, 6, 10, 4, 8];</p>
  <p>const totalFuelCost = liters.filter(l => l > 5).map(l => l * 105).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 2520</p>
  <p>Why: 5 se zyada liters ka total cost nikla.</p>
</div>

<div>
  <h1>Example 16: Interview Classic – Sum of Cubes</h1>
  <p>const numbers = [1, 2, 3, 4, 5];</p>
  <p>const sumCubes = numbers.filter(n => n % 2 !== 0).map(n => n ** 3).reduce((s, n) => s + n, 0);</p>
  <p>Answer or Error: 153</p>
  <p>Why: Odd numbers ke cubes ka sum.</p>
</div>

<div>
  <h1>Example 17: Performance Tracking – Bonus Points</h1>
  <p>const scores = [10, 20, 30, 40, 50];</p>
  <p>const avg = scores.reduce((s, n) => s + n, 0) / scores.length;</p>
  <p>const totalScore = scores.filter(s => s > avg).map(s => s + 5).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 100</p>
  <p>Why: Average se upar scores me bonus add hua.</p>
</div>

<div>
  <h1>Example 18: Subscription App – Final Bill</h1>
  <p>const plans = [199, 399, 599, 299];</p>
  <p>const finalBill = plans.filter(p => p > 300).map(p => p * 1.18).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 1180.82</p>
  <p>Why: 300 se upar plans par tax add hua.</p>
</div>

<div>
  <h1>Example 19: Learning App – Achievement Score</h1>
  <p>const scores = [45, 60, 70, 30, 80];</p>
  <p>const totalScore = scores.filter(s => s >= 60).map(s => s * s).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 14900</p>
  <p>Why: Eligible scores ke squares ka sum.</p>
</div>

<div>
  <h1>Example 20: Interview Finisher</h1>
  <p>const numbers = [3, 6, 9, 10, 12];</p>
  <p>const finalSum = numbers.filter(n => n % 3 === 0).map(n => n * 10).reduce((s, n) => s + n, 0);</p>
  <p>Answer or Error: 300</p>
  <p>Why: 3 se divisible numbers ka final sum.</p>
</div>
